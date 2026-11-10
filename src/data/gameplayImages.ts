/** Delta Force cheat gameplay screenshots — every entry includes alt text. */

export interface GameplayImage {
  id: string;
  src: string;
  /** Blog cover / card path (same asset under /images/blog). */
  blogSrc: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

const gameplay = '/images/gameplay';
const blog = '/images/blog';

export const gameplayImages = {
  espRadar: {
    id: 'espRadar',
    src: `${gameplay}/df-esp-radar.png`,
    blogSrc: `${blog}/df-esp-radar.png`,
    alt: 'Delta Force loot ESP with purple loot chams, green target box, operator name tag and 140 m distance across a raid map',
    caption: 'Loot ESP & chams',
    captionDesc: 'Highlight enemy operators through smoke and terrain with distance and class tags in Operations raids.',
  },
  vehicleEsp: {
    id: 'vehicleEsp',
    src: `${gameplay}/df-vehicle-esp.png`,
    blogSrc: `${blog}/df-vehicle-esp.png`,
    alt: 'Delta Force player ESP showing third-person operator view with green and red operator boxes, player names and distance labels across a Warfare map',
    caption: 'Player loot ESP',
    captionDesc: 'Track operators by name, distance and threat markers before they enter visual range.',
  },
  combatOverlay: {
    id: 'combatOverlay',
    src: `${gameplay}/df-combat-overlay.png`,
    blogSrc: `${blog}/df-combat-overlay.png`,
    alt: 'Delta Force cheat gameplay combat overlay highlighting enemy operators with ESP boxes and distance tags during a live battle',
    caption: 'Combat ESP overlay',
    captionDesc: 'Readable boxes and tags stay useful mid-fight without cluttering your reticle.',
  },
  aimbotFov: {
    id: 'aimbotFov',
    src: `${gameplay}/df-aimbot-fov.png`,
    blogSrc: `${blog}/df-aimbot-fov.png`,
    alt: 'Delta Force optic sight with green 3D ESP boxes around enemy operators behind cover plus meter distances on a raid map',
    caption: 'Player ESP in optics',
    captionDesc: 'See enemy operators through smoke and foliage with model and distance readouts in the optic.',
  },
  airEsp: {
    id: 'airEsp',
    src: `${gameplay}/df-air-esp.png`,
    blogSrc: `${blog}/df-air-esp.png`,
    alt: 'Delta Force combat overlay with orange ballistic prediction lines, speed tags and ESP labels for distant operators and vehicles',
    caption: 'Aimbot lead & player ESP',
    captionDesc: 'Ballistic prediction and long-range operator tags for Warfare and Operations awareness.',
  },
  groundEsp: {
    id: 'groundEsp',
    src: `${gameplay}/df-ground-esp.png`,
    blogSrc: `${blog}/df-ground-esp.png`,
    alt: 'Delta Force ground battle cheat gameplay with loot ESP overlays marking enemy operators and distances across the map',
    caption: 'Ground loot ESP',
    captionDesc: 'Spot camped operators and flanks early with distance-capped ESP for Warfare.',
  },
  mapRadar: {
    id: 'mapRadar',
    src: `${gameplay}/df-map-radar.png`,
    blogSrc: `${blog}/df-map-radar.png`,
    alt: 'Delta Force scope view with bright green ESP silhouette and bounding box on an enemy operator at mid range through cover and foliage',
    caption: 'Through-cover player ESP',
    captionDesc: 'Green chams and weak-spot hints through leaves and terrain for long-range Warfare shots.',
  },
  hackResults: {
    id: 'hackResults',
    src: `${gameplay}/df-hack-results.png`,
    blogSrc: `${blog}/df-hack-results.png`,
    alt: 'Delta Force operator combat scene with red ESP name tags, operator tags, meter distances and a circular lead/radar assist overlay',
    caption: 'Player ESP & lead assist',
    captionDesc: 'Enemy name, model and range tags plus lead assist for live Warfare and Operations fights.',
  },
  menuVisuals: {
    id: 'menuVisuals',
    src: `${gameplay}/df-menu-visuals.png`,
    blogSrc: `${blog}/df-menu-visuals.png`,
    alt: 'Delta Force cheats Visuals menu showing player ESP toggles for bounding box, fill box, name, distance slider to 200m, operator name and teammate filters',
    caption: 'Visuals menu',
    captionDesc: 'Tune player ESP boxes, names, distance caps and teammate filters in one Visuals tab.',
  },
  menuWorld: {
    id: 'menuWorld',
    src: `${gameplay}/df-menu-world.png`,
    blogSrc: `${blog}/df-menu-world.png`,
    alt: 'Delta Force cheats World menu with World ESP and Show Distance toggles on and World Distance slider set to 150m',
    caption: 'World menu',
    captionDesc: 'Enable world ESP markers and set how far objective and world objects draw.',
  },
  menuAimbot: {
    id: 'menuAimbot',
    src: `${gameplay}/df-menu-aimbot.png`,
    blogSrc: `${blog}/df-menu-aimbot.png`,
    alt: 'Delta Force cheats Aimbot menu with enable on, RMB and Mouse 4 binds, prediction on, FOV size 12 degrees and smoothness 48',
    caption: 'Aimbot menu',
    captionDesc: 'Set aim keys, prediction, FOV size and smoothing without digging through nested panels.',
  },
  menuMisc: {
    id: 'menuMisc',
    src: `${gameplay}/df-menu-misc.png`,
    blogSrc: `${blog}/df-menu-misc.png`,
    alt: 'Delta Force cheats Misc menu with Insert menu key, stream-proof on, panic key End, config save/load and cloud DMA connected status',
    caption: 'Misc & stream-proof',
    captionDesc: 'Stream-proof, panic key, menu binds and cloud connection status in one Misc tab.',
  },
} as const satisfies Record<string, GameplayImage>;

export type GameplayImageId = keyof typeof gameplayImages;

export function getGameplayImage(id: GameplayImageId): GameplayImage {
  return gameplayImages[id];
}
