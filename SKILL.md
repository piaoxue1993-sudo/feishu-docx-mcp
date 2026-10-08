---
name: script-art-design-analysis-experimental
description: Experimental screenplay art-design workflow for testing scene parsing, regional art direction, environment prompts, cinematic lighting, paired primary/reverse-angle scene-image generation, and ordered Word scene atlases without changing the stable script-art-design-analysis skill. Use when the user explicitly requests the experimental workflow, asks to generate scene images and same-space reverse angles directly after script analysis, or wants a portable DOCX visual scene catalog with an easy rollback path.
---

# Script Art Design Analysis Experimental

## Overview

Convert a supplied script into Chinese art-department deliverables: an art-direction analysis memo, a consolidated scene list, scene image prompts, and—when requested—generated environment images assembled into an ordered Word (`.docx`) scene atlas.

When the user requests Feishu/Lark delivery or asks to convert the finished output into a Feishu cloud document, also read `references/feishu-export.md`. Finish and validate the local Word atlas first, then import that `.docx` so tables and embedded images are preserved. Keep the local project folder as the recoverable source of truth.

This is the experimental branch. Apply new workflow changes here first. Do not edit or replace the stable `script-art-design-analysis` skill while testing this branch.

Before producing final output, read `references/output-spec.md` and follow it as the fixed output contract unless the user explicitly asks for a different structure.

When the user asks to generate images directly or requests a visual scene catalog, also read `references/image-generation-and-word-layout.md`. For that mode, its integrated Word-atlas contract overrides the standalone prompt-section layout in `references/output-spec.md`; all scene-analysis and coverage rules still apply. Do not create a Markdown atlas unless the user explicitly overrides this rule.

For interior image pairs, also read `references/spatial-continuity-and-reference-research.md`. Use it to infer entrances and circulation that may be outside the primary frame, keep the paired views architecturally coherent, and diversify designs through project-specific film and architecture references.

When the task includes scene image prompts, also read `references/cinematic-lighting.md` and use it to translate script events into film-grade atmosphere, lighting direction, light quality, contrast, color temperature, motivated sources, and air-medium language.

## Workflow

1. Parse the script first.
   - Identify episode and scene numbers, slug lines, locations, time of day, recurring spaces, emotional turning points, and production-design clues.
   - Scan the full action and dialogue text inside every formally headed scene. Do not treat slug lines as the only source of locations.
   - Extract any embedded narrative scene that depicts a different physical place, time, period, or materially different spatial state. This includes flashbacks, flashforwards, prophetic visions, memories, dreams, hallucinations, imagined scenes, surveillance/phone/video footage, news footage, photo reenactments, time-space tunnels, and montage inserts.
   - Count an embedded sequence as a scene-list location when the audience sees or is expected to see a buildable, dressable, scoutable, VFX-constructible, or stock-footage environment. A brief verbal mention of an unseen place does not qualify.
   - For each embedded scene, record its source scene, narrative mode, inferred location, inferred time of day when possible, and art/VFX implications. Preserve uncertainty with labels such as `日夜未明`, `地点待定`, or `概念/VFX空间`; never silently omit it.
   - Assign stable nested labels when formal numbering is absent, such as `E01-S03-F01` for a flashback, `E01-S03-V01` for a vision/prophecy, `E01-S03-D01` for a dream, or `E01-S03-M01` for a montage insert. Keep the parent scene reference visible.
   - If formal scene numbers are missing, infer stable labels such as `S01` or `E01-S01` from order of appearance and state the assumption briefly.
   - Track the first appearance of each physical location because the consolidated scene list must follow first-appearance order.
   - Build a physical-space identity registry before naming image assets. Assign a stable `SPACE-ID` to every real environment, such as `LOC-REPAIR-SHOP-01`. Scene titles, slug-line wording, dramatic functions, subscene labels, and camera descriptions are aliases, not proof of different spaces.
   - Detect same-space aliases from building ownership, address, adjacency, shared entrances, visible architecture, scene-to-scene movement, repeated furnishings, window views, script geography, and explicit phrases such as “same place”, “inside”, “outside”, “other side”, or “continuous”. Record confidence and evidence. When uncertain, keep the candidates linked and resolve them before image generation instead of silently designing two unrelated locations.
   - Distinguish `same physical space / connected zone / separate set`. Different named zones inside one building may need separate images, but they must share one building continuity system. Multiple camera labels inside one room remain one physical space and must share one spatial master.

2. Build the art-direction analysis memo.
   - Explain the overall visual premise in production-design language.
   - Extract visual opportunities from actual script scenes, including class markers, rituals, props, thresholds, weather, decay, renewal, public/private tension, workspaces, domestic spaces, institutional spaces, and transit spaces.
   - Define the color narrative, core art settings, architecture and spatial systems, and camera/composition principles.
   - Recommend foreign film or series references, prioritizing recent works when credible. For each reference, explain what to borrow: lighting, architecture, palette, texture, blocking, dressing density, or atmosphere.
   - Derive a suitable tone, palette, texture, lighting language, and air-medium strategy for the project.
   - Infer a project-specific lighting grammar from the script's genre, period, geography, class world, emotional arc, and recurring spaces. Mention usable motivated sources such as windows, neon, fluorescents, candles, practical lamps, firelight, headlights, screens, overcast sky, moonlight, haze, dust, smoke, rain, snow, or water reflections.

3. Produce the consolidated scene list.
   - Merge repeated or equivalent locations under one primary scene name.
   - Include qualifying embedded narrative scenes even when they have no independent slug line. Never hide them only inside the parent location's plot note.
   - Merge an embedded scene with an existing location row only when it is physically and production-wise the same environment. Keep it separate when it changes period, geography, architecture, dressing state, or VFX construction requirements.
   - In the scene/episode reference cell, mark embedded references with their mode, for example `E01-S03-V01（预见）`, and also retain the parent scene relationship.
   - In the notes, state whether the location is practical, redress, partial build, virtual production, VFX environment, or stock/second-unit candidate when the script supports that inference.
   - Preserve all scene or episode references in the table rather than duplicating rows for the same place.
   - Sort rows by the location's first appearance in the script.
   - Use the exact Chinese table columns in `references/output-spec.md`.
   - Internally attach every row to a `SPACE-ID` and `ZONE-ID`. Do not expose these columns unless useful, but use them to prevent differently named rows or image sections from drifting into unrelated designs.

4. Produce scene image prompts.
   - Generate one prompt for each consolidated scene row unless the user asks for only major scenes.
   - Do not include people, characters, actors, crowds, silhouettes, or body parts.
   - Express the performance area position and the total spatial structure.
   - Use frontal wide view or overhead wide view as appropriate.
   - Anchor architecture, streets, and landmarks in real American references when suitable to the story; if the script clearly requires another country or period, use the story's real place and period instead.
   - Keep the visual language consistent with the memo's reference films and tone.
   - For every prompt, actively derive atmosphere and lighting from the scene's dramatic function instead of using generic phrases. Specify motivated key light, fill strategy, back/rim light or negative fill when useful, contrast ratio feel, color temperature relationship, falloff, exposure strategy, and visible air medium.
   - When one consolidated scene appears in both day and night scenes, write two complete, independently usable lighting variants: `日戏布光提示词` and `夜戏布光提示词`. Do not collapse them into one mixed prompt or describe the night version as merely a darker day version. Preserve the same architecture, dressing, performance zones, and continuity state unless the script requires a change, while rebuilding the motivated sources, direction, color-temperature relationship, fill, contrast, exposure, practicals, reflections, and air medium for each time of day.
   - If a consolidated scene includes additional explicit time states such as dawn, dusk, or golden hour and they materially change the lighting plan, create a separate complete variant for each state using the same rule.
   - Vary lighting by scene function: confession, threat, revelation, investigation, public humiliation, domestic intimacy, institutional power, battle/action, memory, dream, surveillance, or ritual should not share identical light language.
   - Borrow lighting grammar from strong cinematic references only when it fits the script. Name the borrowed trait precisely, such as candlelit chiaroscuro, overcast soft top light, sodium-vapor night exterior, high-window shaft light, fluorescent institutional flatness, smoky backlight, moonlit blue ambience, firelight flicker, or wet-street specular highlights.
   - Keep prompts environment-first. Lighting should reveal architecture, props, entrances/exits, and action zones; it must not turn the output into a character poster.

5. Generate and assemble the visual scene atlas when requested.
   - Follow `references/image-generation-and-word-layout.md` completely.
   - Use the image-generation skill/tool directly without asking for an extra confirmation after the script analysis is complete.
   - Generate one primary image for every required scene asset or materially distinct time-state variant, in first-appearance order. Repeated occurrences of the same unchanged production-design asset reuse the same image pair.
   - Before the first image for a `SPACE-ID`, create and lock a spatial master: plan logic, exterior orientation, entrance and circulation graph, structural grid, door/window count and positions, fixed furnishing coordinates, material palette, exterior view, and a small set of approved camera nodes. Treat this master as the source of truth for every alias, subscene label, primary image, insert-wide view, reverse angle, and time-state variant in that space.
   - Never generate images independently merely because their scene names differ. Before every image call, compare its `SPACE-ID` with all accepted assets. If the physical space matches, use the accepted spatial-master image(s) as references and select a camera node from the same camera graph. A new dramatic label may change emphasis or framing, not architecture or the reverse-facing environment.
   - For one physical room, define one canonical reverse-facing environment per time/state. All primary views that face approximately the same direction must resolve to the same canonical opposite wall, entrance, windows, fixed furniture, and exterior view. Different lenses or lateral offsets may alter perspective and occlusion only; they may not invent a different reverse set.
   - When two named zones are connected parts of one larger environment, their images must share boundary anchors: the same door/opening, structural bay, corridor, exterior landmark, material system, and relative orientation. Generate the parent-space master first, then derive zone views from it.
   - Immediately after each primary image is generated and accepted, use that exact image as the visual reference for a same-space reverse-angle image before starting any other scene or time-state variant.
   - Before generating an interior reverse angle, make a concise spatial-continuity inference: identify visible openings and fixed anchors, infer the camera-facing unseen wall, determine the room's functional entrance and secondary circulation, and decide which unseen connection the reverse angle must reveal.
   - Treat a primary image and its reverse angle as one inseparable asset pair. Preserve architecture, room dimensions, all visible openings, materials, fixed furnishings, dressing positions, time state, weather, and lighting logic. Move only the camera to a physically plausible opposing viewpoint; never substitute a horizontal mirror or an unrelated redraw.
   - If the primary view contains no plausible interior entrance, require the reverse angle to reveal one functional entrance on a previously unseen wall. Its location, swing/slide clearance, threshold, adjoining hall or vestibule, scale, construction, and design language must fit the inferred plan, building type, region, period, class, and script action. This is completion of off-camera space, not permission to move or replace an opening already established in the primary image.
   - Require the reverse angle to retain one to three clearly recognizable continuity anchors from the primary image, seen from the opposite side, so both frames read unmistakably as the same space. Never add, remove, or relocate visible doors, windows, stairs, columns, major furniture, or built-in features unless the script requires a state change.
   - Research and synthesize relevant film/series production design, real architecture, and regional interior references before prompting. Select references by scene function, period, geography, class, building typology, and emotional tone; borrow principles rather than copying a single identifiable set. Vary entrance type, threshold depth, trim, hardware, proportions, material wear, circulation geometry, and dressing density across scenes.
   - Generate a separate reverse angle for every day, night, dawn, dusk, flashback, dream, or other materially distinct image variant. Complete and inspect each pair before continuing.
   - Keep each image focused on the scene's overall design, panoramic spatial identity, and principal performance area. Do not foreground movement routes, plot mechanics, or key-prop relationships unless the user explicitly requests them.
   - Create one portable project folder containing the final Word document and an `images/` subfolder. Store every generated image in `images/` with stable `S01`, `S02` numbering and Chinese scene-name filenames. Name the reverse image by inserting the exact suffix `—反` before the extension of its primary image.
   - Embed image binaries in the Word document; do not use external links. Keep the original, correctly named image files in `images/` so the folder can also serve as an independent art asset library.
   - Place every accepted reverse-angle image immediately below its corresponding primary image in Word, before lighting notes, prompts, or the next time-state variant. Keep each primary/reverse pair together on one page when practical; otherwise force the reverse to be the first content on the following page.
   - Inspect every primary/reverse pair before including it. Retry a failed asset with a targeted correction based on the accepted primary image when practical; never invent a successful image path.
   - After finishing all assets for a `SPACE-ID`, run a cross-pair continuity audit, not only a pairwise audit. Compare every primary and reverse image in that group against the spatial master. Reject any image whose opposite wall, entrance, window view, structural rhythm, fixed furnishings, or orientation contradicts another accepted image, even if each individual pair looks plausible in isolation.
   - Run `scripts/validate_scene_word_atlas.py` on the completed Word file and its image folder. Fix missing embedded images, non-Chinese filenames, missing reverse images, incorrect pair order, scene-number gaps, or source/embedded image-count mismatches before delivery.
   - Render the final DOCX to page images with the document tools and inspect every page. Correct overflow, clipped images, orphaned headings, broken tables, blank pages, unreadable type, or separated primary/reverse pairs before delivery.

6. Export to Feishu when requested.
   - Follow `references/feishu-export.md` and run `scripts/export-word-to-feishu.mjs` only after the Word package passes local validation.
   - Treat Feishu conversion as an additional delivery channel, never as a replacement for the local Word and `images/` folder.
   - Do not request, display, store in project files, or log the user's App Secret. Read credentials only from local environment variables.
   - Return the Feishu document URL only after an authenticated import completes and the result is verified. If credentials, permissions, or connectivity are unavailable, deliver the local package and report the exact remaining setup step.

## Handling Missing Information

- If the user supplies only a partial script, work from the supplied portion and label the scope as partial.
- If the story setting is unknown, infer cautiously from names, geography, institutions, currencies, vehicles, architecture, and social systems; mark inference clearly.
- If an embedded scene shows an event but provides no usable location detail, include a provisional row instead of dropping it. Name it by dramatic function, such as `未知地点 - 车祸预见画面`, and flag the location/time as pending confirmation.
- If the user asks for latest or recent references, verify current titles before finalizing.
- If the script is too long for one response, prioritize the memo and complete scene list first, then continue scene prompts in batches.
- If image generation fails for an asset, preserve its ordered Word section, mark it `生成失败 / 待重试`, include the prompt, and do not insert a placeholder that pretends an image exists. Report the atlas as partial rather than complete.

## Output Language

Write primarily in Chinese. Keep foreign film and series titles in original English, common Chinese translation, or both when useful.
