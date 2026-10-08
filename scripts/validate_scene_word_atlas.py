#!/usr/bin/env python3
"""Validate a generated DOCX scene atlas and its named source-image folder."""

from __future__ import annotations

import argparse
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
CHINESE_RE = re.compile(r"[\u4e00-\u9fff]")
SCENE_RE = re.compile(r"^(S\d{2,})_")
NS = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "pr": "http://schemas.openxmlformats.org/package/2006/relationships",
}


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("docx", type=Path, help="Word scene atlas (.docx)")
    parser.add_argument("--images-dir", type=Path, required=True, help="Folder containing final named images")
    args = parser.parse_args()

    docx = args.docx.resolve()
    images_dir = args.images_dir.resolve()
    errors: list[str] = []

    if not docx.is_file() or docx.suffix.lower() != ".docx":
        print(f"ERROR: DOCX not found: {docx}")
        return 1
    if not images_dir.is_dir():
        print(f"ERROR: images directory not found: {images_dir}")
        return 1

    images = sorted(p for p in images_dir.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS)
    if not images:
        fail(errors, "images directory contains no supported image files")

    names = {p.name for p in images}
    for image in images:
        stem = image.stem
        if not CHINESE_RE.search(stem):
            fail(errors, f"image filename lacks a Chinese scene name: {image.name}")
        if not SCENE_RE.match(image.name):
            fail(errors, f"image filename lacks stable S## prefix: {image.name}")
        if stem.endswith("—反"):
            primary = stem[:-2] + image.suffix
            if primary not in names:
                fail(errors, f"reverse image has no matching primary: {image.name}")
        else:
            reverse = stem + "—反" + image.suffix
            if reverse not in names:
                fail(errors, f"primary image has no matching reverse: {image.name}")

    scene_numbers = sorted({int(m.group(1)[1:]) for p in images if (m := SCENE_RE.match(p.name))})
    if scene_numbers and scene_numbers != list(range(scene_numbers[0], scene_numbers[-1] + 1)):
        fail(errors, f"scene numbering has gaps: {scene_numbers}")

    try:
        with zipfile.ZipFile(docx) as package:
            members = set(package.namelist())
            required = {"word/document.xml", "word/_rels/document.xml.rels"}
            missing = required - members
            if missing:
                fail(errors, f"DOCX package missing required parts: {sorted(missing)}")
            else:
                document = ET.fromstring(package.read("word/document.xml"))
                rels = ET.fromstring(package.read("word/_rels/document.xml.rels"))
                rel_targets = {
                    rel.attrib["Id"]: rel.attrib.get("Target", "")
                    for rel in rels.findall("pr:Relationship", NS)
                }
                embed_ids = [node.attrib.get(f"{{{NS['r']}}}embed") for node in document.findall(".//a:blip", NS)]
                embed_ids = [rid for rid in embed_ids if rid]
                embedded_targets = [rel_targets.get(rid, "") for rid in embed_ids]
                embedded_images = [target for target in embedded_targets if target.startswith("media/")]
                if len(embedded_images) != len(images):
                    fail(errors, f"embedded image occurrences ({len(embedded_images)}) do not match source images ({len(images)})")

                text = "".join(node.text or "" for node in document.findall(".//w:t", NS))
                for number in scene_numbers:
                    scene_id = f"S{number:02d}"
                    if scene_id not in text:
                        fail(errors, f"DOCX text does not contain scene heading {scene_id}")
    except zipfile.BadZipFile:
        fail(errors, "file is not a valid DOCX/ZIP package")
    except ET.ParseError as exc:
        fail(errors, f"invalid DOCX XML: {exc}")

    print(f"DOCX: {docx}")
    print(f"Source images: {len(images)}")
    print(f"Scene IDs: {len(scene_numbers)}")
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    print("PASS: Word scene atlas package and image pairs passed structural validation.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
