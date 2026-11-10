/** War Thunder cheat gameplay screenshots — every entry includes alt text. */

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
    src: `${gameplay}/wt-esp-radar.png`,
    blogSrc: `${blog}/wt-esp-radar.png`,
    alt: 'War Thunder naval ESP with purple ship chams, green target box, IJN Mutsu name tag and 1.40 km distance through arctic islands',
    caption: 'Naval ESP & chams',
    captionDesc: 'Highlight enemy ships through smoke and terrain with distance and class tags in Naval battles.',
  },
  vehicleEsp: {
    id: 'vehicleEsp',
    src: `${gameplay}/wt-vehicle-esp.png`,
    blogSrc: `${blog}/wt-vehicle-esp.png`,
    alt: 'War Thunder air ESP showing biplane third-person view with green and red aircraft boxes, player names and distance labels over a tropical coastline',
    caption: 'Air vehicle ESP',
    captionDesc: 'Track fighters and attackers by name, model and range before they enter visual range.',
  },
  combatOverlay: {
    id: 'combatOverlay',
    src: `${gameplay}/wt-combat-overlay.png`,
    blogSrc: `${blog}/wt-combat-overlay.png`,
    alt: 'War Thunder cheat gameplay combat overlay highlighting enemy vehicles with ESP boxes and distance tags during a live battle',
    caption: 'Combat ESP overlay',
    captionDesc: 'Readable boxes and tags stay useful mid-fight without cluttering your reticle.',
  },
  aimbotFov: {
    id: 'aimbotFov',
    src: `${gameplay}/wt-aimbot-fov.png`,
    blogSrc: `${blog}/wt-aimbot-fov.png`,
    alt: 'War Thunder tank gunner sight with green 3D ESP boxes around M2A4 Tetrarch Pz.II and Chi-Ha tanks plus meter distances on a tropical map',
    caption: 'Tank ESP in optics',
    captionDesc: 'See enemy tanks through smoke and foliage with model and distance readouts in the gun sight.',
  },
  airEsp: {
    id: 'airEsp',
    src: `${gameplay}/wt-air-esp.png`,
    blogSrc: `${blog}/wt-air-esp.png`,
    alt: 'War Thunder modern fighter with orange ballistic prediction lines, missile speed tags and ESP labels for distant Gepard and ADATS targets',
    caption: 'Aimbot lead & air ESP',
    captionDesc: 'Ballistic prediction and long-range SPAA/vehicle tags for jet combat awareness.',
  },
  groundEsp: {
    id: 'groundEsp',
    src: `${gameplay}/wt-ground-esp.png`,
    blogSrc: `${blog}/wt-ground-esp.png`,
    alt: 'War Thunder ground battle cheat gameplay with vehicle ESP overlays marking enemy tanks and distances across the map',
    caption: 'Ground vehicle ESP',
    captionDesc: 'Spot hull-down tanks and flanks early with distance-capped ESP for Realistic Ground.',
  },
  mapRadar: {
    id: 'mapRadar',
    src: `${gameplay}/wt-map-radar.png`,
    blogSrc: `${blog}/wt-map-radar.png`,
    alt: 'War Thunder tank sniper sight with bright green ESP silhouette and bounding box on an enemy medium tank at 1051 m through tropical foliage',
    caption: 'Through-cover tank ESP',
    captionDesc: 'Green chams and weak-spot hints through leaves and terrain for long-range Ground shots.',
  },
  hackResults: {
    id: 'hackResults',
    src: `${gameplay}/wt-hack-results.png`,
    blogSrc: `${blog}/wt-hack-results.png`,
    alt: 'War Thunder biplane over snow with red ESP name tags, aircraft models, kilometer distances and a circular lead/radar assist overlay',
    caption: 'Air ESP & lead assist',
    captionDesc: 'Enemy name, model and range tags plus lead assist for classic propeller fights.',
  },
  menuVisuals: {
    id: 'menuVisuals',
    src: `${gameplay}/wt-menu-visuals.png`,
    blogSrc: `${blog}/wt-menu-visuals.png`,
    alt: 'War Thunder cheats Visuals menu showing tank ESP toggles for bounding box, fill box, name, distance slider to 200m, vehicle name and teammate filters',
    caption: 'Visuals menu',
    captionDesc: 'Tune tank ESP boxes, names, distance caps and teammate filters in one Visuals tab.',
  },
  menuWorld: {
    id: 'menuWorld',
    src: `${gameplay}/wt-menu-world.png`,
    blogSrc: `${blog}/wt-menu-world.png`,
    alt: 'War Thunder cheats World menu with World ESP and Show Distance toggles on and World Distance slider set to 150m',
    caption: 'World menu',
    captionDesc: 'Enable world ESP markers and set how far objective and world objects draw.',
  },
  menuAimbot: {
    id: 'menuAimbot',
    src: `${gameplay}/wt-menu-aimbot.png`,
    blogSrc: `${blog}/wt-menu-aimbot.png`,
    alt: 'War Thunder cheats Aimbot menu with enable on, RMB and Mouse 4 binds, prediction on, FOV size 12 degrees and smoothness 48',
    caption: 'Aimbot menu',
    captionDesc: 'Set aim keys, prediction, FOV size and smoothing without digging through nested panels.',
  },
  menuMisc: {
    id: 'menuMisc',
    src: `${gameplay}/wt-menu-misc.png`,
    blogSrc: `${blog}/wt-menu-misc.png`,
    alt: 'War Thunder cheats Misc menu with Insert menu key, stream-proof on, panic key End, config save/load and cloud DMA connected status',
    caption: 'Misc & stream-proof',
    captionDesc: 'Stream-proof, panic key, menu binds and cloud connection status in one Misc tab.',
  },
} as const satisfies Record<string, GameplayImage>;

export type GameplayImageId = keyof typeof gameplayImages;

export function getGameplayImage(id: GameplayImageId): GameplayImage {
  return gameplayImages[id];
}
