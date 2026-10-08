# Output Specification

## Required Structure

Produce the deliverables in this order:

1. `影视美术场景阐述文稿`
2. `剧本场景清单`
3. `场景图提示词`

Keep the writing specific, visual, spatial, and tied to script events. Avoid generic style language unless it is attached to a concrete location, plot beat, or character pressure.

## 1. 影视美术场景阐述文稿

Include these subsections:

- `整体美术概念`: Summarize the visual premise of the project in production-design language.
- `场景亮点提炼`: Identify locations, props, spatial contradictions, class markers, decay/renewal, weather, rituals, workspaces, domestic spaces, institutional spaces, transit spaces, and public/private thresholds that can become visual highlights.
- `色彩叙事体系`: Define the emotional and dramatic color arc. Include dominant palette, contrast colors, transitions across story phases or scenes, and how color reflects character pressure or narrative movement.
- `核心美术设定`: Define world rules for materials, props, signage, dressing density, age of objects, technology level, social class, and traces of use.
- `建筑与空间体系`: Describe architectural typologies, spatial hierarchy, circulation, entrances/exits, windows, vertical levels, compression/opening, performance zones, and how repeated locations should evolve.
- `镜头与构图原则`: Propose usable composition rules for art direction: foreground/midground/background layering, frame-within-frame, corridor depth, negative space, symmetry/asymmetry, overhead plans, and wide establishing views.
- `对标影片与影调`: Provide foreign film or series references when possible, preferably recent and aesthetically relevant. For each reference, name the title and explain the borrowed quality: lighting, architecture, palette, texture, blocking, set dressing, or atmosphere.
- `本剧影调建议`: Conclude with a concise tone statement covering realism level, saturation, contrast, grain, lens feeling, weather/air medium, and lighting philosophy.

## 2. 剧本场景清单

Create a native Word table with exactly these columns when producing the DOCX deliverable; use the same columns in any text-only response:

| 主场景 | 次场景 | 场次 / 集数 | 日夜 | 核心剧情场景备注 |
|---|---|---|---|---|

Rules:

- Sort locations by first appearance in the script.
- Merge the same physical location even if it appears in multiple scenes.
- Use `主场景` for the broad location, such as `洛杉矶市中心公寓楼`, `医院`, `警局`, `高速路服务区`.
- Use `次场景` for the precise area, such as `走廊`, `厨房`, `屋顶`, `停车场`, `审讯室`.
- In `场次 / 集数`, preserve all scene numbers or episode references, such as `E01-S03, E01-S08, E02-S11`.
- In `日夜`, combine values when repeated, such as `日 / 夜` or `黄昏 / 夜`.
- In `核心剧情场景备注`, focus on what the art department needs to know: action, emotional function, set dressing requirements, transformation across appearances, special props, safety/effects implications, or continuity notes.
- If the source script has no scene numbering, use inferred labels such as `S01`, `S02`, or `E01-S01`.

## 3. 场景图提示词

For each consolidated scene, produce:

- `场景`: The same `主场景 - 次场景` naming used in the table.
- `用途`: Explain why this image is needed for art direction.
- `布光 / 光感推理`: Briefly state the lighting choice derived from the scene's script function, atmosphere, time of day, genre, and emotional pressure.
- `正向提示词`: A Chinese prompt suitable for generating an environment concept image.
- `约束词`: Use the fixed negative constraints below.

If the scene list's `日夜` cell contains both `日` and `夜`, replace the single lighting/prompt pair with all of these fields:

- `日戏布光 / 光感推理`
- `日戏正向提示词`
- `夜戏布光 / 光感推理`
- `夜戏正向提示词`

Each day/night positive prompt must be complete and independently usable; do not write a shared base prompt plus a short lighting addendum. Repeat the necessary environment, composition, spatial, camera, material, and continuity language in both variants. Keep architecture, fixed dressing, performance zones, entrances/exits, and hero-prop continuity aligned unless the script explicitly changes them. Change the motivated source system, direction, light quality, color temperature, fill, contrast, exposure, practical-source placement, reflections, shadows, and air medium to suit the relevant time and dramatic beat. Never treat night as only an underexposed or blue-tinted copy of day.

Apply the same separate-field pattern to other materially distinct explicit time states, such as `清晨`, `黄昏`, or `黎明`, when they are consolidated in one scene row.

The positive prompt must include:

- No people, no characters, no visible performers.
- The performance area location and total spatial structure.
- Frontal wide view or overhead wide view.
- Realistic architecture and spatial logic.
- Atmosphere, light direction, light quality, color temperature, contrast, exposure, and air-medium choices derived from the script's action, emotion, time of day, genre, and location.
- A motivated key light source: for example window daylight, overcast sky, candle/firelight, practical lamp, fluorescent tube, neon/signage, headlights, screen glow, moonlight, skylight, police light, lightning, or VFX/environmental glow.
- A fill-light strategy: negative fill, bounced fill, low soft fill, practical fill, screen fill, haze-lifted fill, or almost no fill when justified.
- Optional backlight/rim/edge light when it helps reveal entrances, thresholds, props, smoke, rain, dust, object silhouettes, or architectural depth. Do not use it as a generic beauty light.
- A scene-specific contrast level: soft low-contrast intimacy, medium-contrast realism, hard chiaroscuro, high-contrast threat, blown daylight pressure, underexposed secrecy, or another justified contrast strategy.
- Physical light behavior: falloff, motivated shadows, restrained specular highlights, controlled bloom, candle flicker, dust shafts, smoke/haze beams, wet-ground reflections, or dry matte surfaces where relevant.
- Filmic three-part composition.
- Hyper-real photographic texture and fine detail.
- Fine film grain.
- 2.35:1 ultra-wide cinema aspect ratio.
- Realistic light and air medium; one clear key light source and controlled fill sources.
- Ground reflections kept restrained and physically plausible.
- Lens distortion properties appropriate to a wide lens.
- 14mm film-shot feeling and ARRI Alexa camera texture.
- Realistic low-saturation color grading.
- Visual traits drawn from the memo's reference films and tone.

Where suitable, include real U.S. architectural, street, or landmark references, for example:

- New York brownstone, Brooklyn warehouse, Queens motel strip, Los Angeles hillside home, Downtown LA concrete civic architecture, Chicago brick apartment block, Boston institutional brick, New Orleans shotgun house, Nevada desert gas station, suburban California ranch house, Miami motel neon, Pacific Northwest timber house.

Do not force American references when the script clearly requires another country or period. In that case, use real architecture from the story's place and period.

### Cinematic Lighting Requirements

When writing scene image prompts, do not repeat one generic lighting formula across every location. Infer a light design from the script:

- Domestic intimacy or betrayal: motivated window light, candle/practical lamp pools, soft falloff, negative fill around doors or bed/desk edges.
- Investigation, evidence, and paperwork: directional desk/window light, colder fill, paper texture visibility, clear pools of light on documents, darker surrounding walls.
- Public humiliation, banquet, ritual, or court scenes: layered practical sources, lantern/candle/firelight or institutional daylight, visible hierarchy between central action zone and watching zones.
- Power institutions: high windows, clerestory shafts, symmetrical top/side light, cooler or more controlled fill, hard architectural shadows.
- Threat, crime, secrecy, or conspiracy: underexposure, hard side light, occluded light through blinds/screens/door gaps, smoky backlight, pockets of darkness.
- Action, battle, disaster, or pursuit: broken motivated sources, fire/sparks/headlights/strobes, dust/smoke/rain medium, higher contrast and directional backlight.
- Flashback or memory: define a distinct but restrained treatment, such as warmer faded daylight, lower contrast, slight halation, softer haze, or period-specific practical light; keep it physically plausible.
- Dream, hallucination, prophecy, abstract, or VFX space: use a motivated surreal logic tied to the story object or environment, not generic glowing mist.

For each prompt, include at least three precise lighting descriptors from: key direction, light quality, source motivation, color temperature relationship, fill level, contrast, shadow character, falloff, exposure, bloom/halation, haze/smoke/dust/rain, reflections, and practical-source placement.

### Day / Night Variant Requirements

For a location used in both day and night scenes:

- Base the day version on a plausible solar or sky condition: direct sun, overcast skylight, window bounce, courtyard reflection, clerestory daylight, or another script-supported source. State sun/sky direction, softness, interior penetration, fill behavior, and exposure relationship between exterior openings and the performance area.
- Base the night version on plausible nocturnal sources: moon/sky ambience only when physically available, candles, oil lamps, lanterns, household practicals, streetlights, neon, fire, headlights, screens, emergency lights, or a story/VFX source. State practical placement, falloff, dark-zone control, color separation, and whether exterior openings read as black, moonlit, or city-lit.
- Preserve spatial readability and production-design continuity across both versions, but let each version reveal different usable layers of the set: daylight may clarify architecture, circulation, wear, and material color; night light may organize thresholds, pools of action, silhouettes of props, depth, secrecy, or ritual hierarchy.
- Tie each variant to the actual plot beats occurring at that time. If daytime and nighttime appearances serve different dramatic functions, their contrast and atmosphere must differ accordingly.
- Do not use vague paired labels such as `日夜氛围兼具`, `可切换日夜`, or `白天自然光、夜晚月光` without complete source, direction, quality, fill, contrast, exposure, and air-medium detail for both variants.

### Fixed Negative Constraints

Use these constraints exactly unless the user modifies them:

`CG 渲染感、3D 建模感、卡通、动漫、插画、手绘、过度光滑、无瑕疵、完美对称、失真透视、塑料质感、人物变形、过曝死黑、噪点过重、锐化过度、饱和度过高、夸张特效、违和物体、人物、角色、演员、人群、肖像、身体局部`

## Prompt Style Template

Use this structure for each positive prompt:

`无人物、无角色、无演员，[主场景与次场景]，[正面全景/俯视全景]，明确表现[表演区位置]与[整体空间结构]，[建筑/街道/地标真实参考]，[关键剧情后的空间状态或陈设痕迹]，影视三分构图，前景/中景/远景层次清晰，参考[影片A]的[可借鉴特征]，参考[影片B]的[可借鉴特征]，超写实照片质感，细节丰富细腻，细腻胶片颗粒，2.35:1 超宽银幕，真实空气介质感，主光源来自[方向/光源类型]，辅光源克制不杂乱，地面反光自然不过度，14mm 胶片广角镜头轻微边缘畸变，ARRI Alexa 摄影机质感，写实低饱和色彩分级`

Also include a scene-specific lighting clause in natural Chinese, for example:

`布光：主光来自[具体方向/具体光源]，[硬/软/散射/切割/跳 bounce]光质，[冷暖关系]，[低/中/高]反差，[负补光/低位柔补/几乎无补光]，[烟尘/雨雾/纸尘/水汽]形成可见光束或空气层次，[阴影/高光/反射]服务于[剧情压力或空间功能]。`

## Embedded Narrative Scene Coverage

Apply these rules to the consolidated scene list:

- Read every action paragraph and visual insert, not only formal scene headings.
- Add a scene-list entry for every visually depicted flashback, flashforward, prophecy/vision, memory, dream, hallucination, imagined scene, surveillance/phone/news footage, montage insert, or abstract transition that introduces a distinct environment or a materially different period/dressing state.
- Do not add rows for locations that are only mentioned in dialogue and never visualized.
- Give unnumbered embedded scenes stable child references tied to their parent scene: `E01-S03-F01` (flashback), `E01-S03-V01` (vision/prophecy), `E01-S03-D01` (dream), and `E01-S03-M01` (montage/insert). Other modes may use a short documented code.
- In `场次 / 集数`, preserve the child reference and add a Chinese mode label, for example `E01-S03-V01（预见）`.
- Merge an embedded entry into an existing row only if the physical environment, period, dressing, and production method are equivalent. Keep separate rows for historical versions, destroyed/altered states, abstract/VFX spaces, or geographically distinct places.
- When location or day/night cannot be inferred, still include the entry and use `地点待定`, `日夜未明`, or `概念/VFX空间` as appropriate.
- In `核心剧情场景备注`, identify the parent scene, narrative mode, visible action, required performance/action zone, hero props, continuity state, and likely practical/redress/build/VFX/stock-footage implications.
- Reconcile four totals before delivery: formal scene headings, qualifying embedded scenes, consolidated scene rows, and all episode/scene references carried into those rows.

## Quality Checklist

Before finalizing, verify:

- The memo references actual script content.
- The scene list merges repeated locations and preserves all scene references.
- Every qualifying embedded narrative scene is represented in the scene list, either as its own row or as an explicitly referenced occurrence in a physically equivalent consolidated row.
- Flashbacks, visions, dreams, memories, footage, montages, and abstract/VFX transitions were audited from action text rather than inferred only from slug lines.
- Unseen locations mentioned only in dialogue were not incorrectly promoted to scene rows.
- Scene order follows first appearance.
- Every prompt forbids people.
- Every prompt describes performance area and spatial structure.
- Every prompt is suitable for an environment image, not a character poster or key art.
- Every prompt contains scene-specific cinematic lighting rather than a copied generic lighting phrase.
- Every prompt's lighting is motivated by a source that could plausibly exist in the location or by a clearly identified VFX/story device.
- Every prompt explains light quality, direction, contrast/fill, and air medium or reflection behavior.
- Every consolidated scene marked `日 / 夜` has separate, complete `日戏` and `夜戏` lighting reasoning and positive prompts; neither variant depends on omitted shared text.
- Day/night variants preserve spatial and dressing continuity while using distinct, physically motivated source systems instead of brightness or color-filter substitutions.
- The visual references, palette, and tone remain consistent across memo and prompts.
