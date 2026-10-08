# Cinematic Lighting Reference for Script Art Prompts

Use this reference when generating `场景图提示词`. The goal is not to imitate a title blindly, but to translate the script's drama, location, period, and audiovisual language into precise, film-grade lighting prompts for environment concept images.

## Core Method

For each consolidated scene row, infer lighting in this order:

1. Dramatic function: intimacy, betrayal, exposure, investigation, ritual, threat, grief, memory, power display, pursuit, disaster, battle, dream/vision, or transition.
2. Motivated source: window, skylight, door gap, candle, oil lamp, fireplace, lantern, practical lamp, fluorescent, neon, headlight, screen, moon, overcast sky, fire, lightning, police/emergency light, signage, projector, VFX object, or natural reflection.
3. Light direction and quality: high side, low side, top, back, rim, frontal flat, bounced, diffused, hard-cut shaft, dappled, flicker, moving, or occluded.
4. Contrast/fill: low contrast, medium naturalism, hard chiaroscuro, heavy negative fill, haze-lifted shadows, almost no fill, or blown daylight.
5. Atmosphere: clean air, candle smoke, dust, mist, rain, wet pavement, paper dust, desert haze, kitchen steam, battlefield smoke, neon haze, hospital flatness, office fluorescence, or supernatural/VFX particulate.
6. Production-design visibility: use light to reveal entrances, thresholds, stairs, windows, action zones, hero props, evidence tables, ritual centers, vehicle routes, or damaged surfaces.

Each prompt should include at least three concrete lighting descriptors. Avoid generic phrases like `cinematic lighting`, `dramatic lighting`, `beautiful light`, or `moody atmosphere` unless they are followed by precise source, direction, quality, and contrast.

## Same Location, Separate Day / Night Designs

When one consolidated location appears in both day and night scenes, create two complete lighting prompts. Keep the production-design identity stable, but treat the two time states as separate cinematographic setups.

### Day setup

1. Choose the exact daylight condition required by the scene: hard sun, high-cloud diffusion, overcast top light, cool morning light, warm late-afternoon light, reflected courtyard light, or window/skylight penetration.
2. Define source direction and architectural interaction: which facade, window, door, roof opening, courtyard wall, or reflective surface carries the key and bounce.
3. Define interior/exterior exposure balance, negative fill, shadow edge, material color visibility, and atmospheric density.
4. Use daylight to reveal circulation, scale, wear, class, signage, set dressing, and the main performance/action zone.

### Night setup

1. Inventory visible practical and environmental sources supported by the location: candles, oil lamps, lanterns, sconces, table lamps, fluorescent tubes, streetlights, signs, fire, vehicle lights, screens, city spill, or story/VFX light.
2. Assign hierarchy: identify the key source, restrained fill, optional threshold/back light, and areas allowed to fall into darkness.
3. Define warm/cool separation, falloff, practical placement, controlled bloom, shadow density, reflections, and air-medium response.
4. Use pools of light and dark thresholds to reveal entrances, evidence, ritual centers, danger routes, prop silhouettes, and dramatic depth without losing the set's spatial logic.

Do not obtain the night setup by lowering day exposure or adding a blue cast. Do not obtain the day setup by removing practicals from a night prompt. Each version must be independently motivated by its own physical sources and the plot beat occurring at that time. Repeat the full environment prompt for both versions so either can be sent directly to an image generator.

## Borrowable Film/Series Lighting Grammars

### Chinese / East Asian period and historical drama

- `The Assassin 刺客聂隐娘`: natural window light, candlelit interiors, low-saturation palette, strong negative space, fabric-filtered daylight, restrained contrast.
- `Raise the Red Lantern 大红灯笼高高挂`: ritualized lantern pools, red practical light as power marker, courtyard axial composition, shadowed walls, repeated domestic oppression.
- `A Touch of Zen 侠女`: hard daylight through old architecture, deep corridor perspective, smoky shafts, textured walls, classical suspense.
- `Farewell My Concubine 霸王别姬`: theatrical practicals, dusty interiors, amber stage spill, nostalgic halation, layered curtains and backstage darkness.
- `Shadow 影`: monochrome ink-wash ambience, overcast soft top light, wet surfaces, controlled highlights, restrained contrast.
- `Crouching Tiger, Hidden Dragon 卧虎藏龙`: moonlit blue exteriors, lantern accents, bamboo-filtered light, elegant night atmosphere without excessive fantasy glow.
- `The Story of Ming Lan 知否知否应是绿肥红瘦`: candle/oil-lamp motivated domestic light, Song-style interior warmth, low practical pools, realistic night falloff, household texture.
- `The Longest Day in Chang'an 长安十二时辰`: Tang-style city lanterns, torch/firelight, smoky night streets, busy market depth, directional shafts in official spaces.
- `Nirvana in Fire 琅琊榜`: palace/court symmetry, cool daylight in power spaces, warm brazier interiors, formal staging with controlled fill.
- `Hero 英雄`: color-coded memory spaces, stylized but simple source logic, saturated environment identity; use cautiously when the script supports heightened visual chapters.

### International prestige drama / historical / thriller

- `Barry Lyndon`: candlelit chiaroscuro, soft flame falloff, period-accurate low-light interiors, painterly depth.
- `The Favourite`: wide-lens period interiors, window shafts, low natural light, hard architectural contrast, candle practicals.
- `The Northman`: firelight, overcast cold exteriors, smoke and ash atmosphere, ritual darkness, brutal contrast.
- `The Green Knight`: foggy daylight, mossy low saturation, diffused medieval interiors, mystical but physical atmosphere.
- `Dune`: hard sun, desert haze, vast negative space, monumental architecture, low-fill silhouettes of structures.
- `Blade Runner 2049`: motivated neon, volumetric haze, colored practicals, wet reflections, large-scale architectural mood.
- `Sicario`: harsh sun/low fill exteriors, dusk silhouettes, institutional fluorescence, tension from exposure control.
- `Prisoners`: rain, overcast gray daylight, sodium-vapor night, low-key interiors, moral dread through underexposure.
- `The Godfather`: warm top light, heavy eye shadows, wood-paneled power interiors, low-key family/conspiracy ambience.
- `The Crown`: soft palace daylight, large windows, cool institutional formality, controlled contrast and polished texture.
- `Mad Men`: practical lamp motivation, period interiors, warm pools and office fluorescence, social hierarchy through lighting zones.
- `Mindhunter`: flat institutional fluorescents, sickly green/cyan fill, low-saturation offices, psychological pressure.
- `The Batman`: wet night streets, sodium/neon motivated color, deep blacks, rain reflections, smoky backlight.
- `True Detective`: sodium-vapor rural nights, humid haze, single-source practicals, documentary dread.
- `No Country for Old Men`: dry sun, motel fluorescents, hard shadows, clean but ominous practical lighting.

### Contemporary drama, romance, domestic suspense

- Intimate home scenes: window-side soft key, warm practical pools, negative fill at room edges, textured lampshades, motivated shadows.
- Betrayal/revelation interiors: side key through doorway/window, underexposed background, hard-edged shadow across evidence props, cool fill on paper/phone/screen.
- Wealth display: layered chandeliers/practicals, controlled specular highlights on marble, glass, lacquer, metal; keep highlights plausible and not glossy CGI.
- Poverty/old memory: softer falloff, warmer faded daylight, dusty window beams, matte surfaces, worn fabric, reduced saturation.
- Public confrontation: brighter central action zone, darker watchers/background, multiple practical sources that create social hierarchy.

### Crime, legal, institutional, medical, corporate

- Police/court/institutional: high windows or fluorescent top light, cooler color temperature, clean visibility, harder shadows on walls, restricted palette.
- Interrogation or secret meeting: single overhead/side practical, heavy negative fill, isolated table pool, smoky or stale air.
- Hospital: soft overhead fluorescent, green/cyan cast, clean specular floors, almost shadowless anxiety unless the script calls for noir.
- Corporate power: cool glass daylight, reflective surfaces, controlled highlights, linear architecture, slight underexposure for tension.

### Action, battle, disaster, science fiction

- Battlefields: low sun or firelight backlight, dust/smoke particles, broken practical sources, high contrast, silhouettes of props/structures rather than characters.
- Vehicle/transit: headlights, dashboard/screen glow, moving streaks, rain or windshield reflections, tunnel sodium light.
- Sci-fi control rooms: screen glow as fill, overhead strips, cool cyan/blue key, amber warning accents, reflective black surfaces controlled.
- VFX portals/visions: light must originate from the story object or environment; describe particle density, spill direction, color contamination, and how it affects nearby architecture.

## Scene Function to Lighting Translation

- `身份揭露`: hard side or top light on the central threshold; background falls into controlled darkness; reveal props receive crisp highlights.
- `证据展开`: desk/window key, paper-white bounce, dark outer room, readable texture on documents and seals.
- `婚姻亲密假象`: warm soft practicals, shallow falloff, gentle candle/lampshade pools, inviting but slightly enclosed.
- `背叛发现`: same domestic space but colder fill, sharper shadow, lower exposure, isolated evidence object.
- `权力压迫`: top/high-window light, large axial shadows, symmetrical background, low fill.
- `公众羞辱`: practical lantern/chandelier layers, central action zone brighter than crowd/watch zones, busy background separation.
- `逃亡/追逐/危险`: moving hard sources, headlights/torches/neon, rain/dust/haze, high contrast and directional backlight.
- `记忆/闪回`: distinguish from present with warmer or faded source, softer haze, slightly lower contrast, gentle halation; retain realistic physics.
- `梦境/幻觉`: choose a source tied to story psychology or object; use controlled surreal color spill, not generic glowing fog.

## Prompt Wording Bank

Use concrete phrases like:

- `主光来自左侧高窗的冷白晨光，穿过木格窗形成硬边斜切光`
- `烛火作为唯一暖主光，在低案和屏风上形成快速衰减的暖色光池`
- `门缝漏入一条窄硬光，周围使用重负补光形成压迫黑位`
- `灯笼与廊下油灯形成多点暖 practicals，但中心证物案更亮、宾客席压暗`
- `阴天顶光均匀压低色彩，辅以纸面微弱反跳光，呈现官署冷静秩序`
- `烟尘让逆光形成可见光束，地面保持干燥哑光、无夸张反射`
- `雨后石板路只保留克制高光，不做镜面水洼`
- `屏幕/全息/VFX光从道具方向外溢，污染邻近墙面和地面边缘`
- `几乎无补光，暗部保留纹理但不过曝死黑`
- `低位暖光与高位冷月光形成冷暖分离`

## Anti-patterns

- Do not use the same phrase `真实空气介质感，主光源来自窗户，辅光克制` for every scene.
- Do not add beauty portrait lighting, catchlights, skin language, or character-facing language to environment prompts.
- Do not make every historical scene candlelit; day interiors, overcast courtyards, palace skylight, reflected water light, and lantern festivals require different strategies.
- Do not overuse neon, blue/orange contrast, fog, or volumetric beams when unsupported by the script.
- Do not cite references only as names. Always state the borrowed trait: light source, color, contrast, texture, blocking, or atmosphere.
- Do not combine a cross-day/night location into one `日夜通用` lighting paragraph or write `同上，仅改为夜景`; provide two complete prompts with stable set continuity and distinct source logic.
