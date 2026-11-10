/** FC 27 cheat gameplay screenshots — every entry includes alt text. */

export interface GameplayImage {
  id: string;
  src: string;
  /** Blog cover / card path (same asset under /images/blog). */
  blogSrc: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

const blog = '/images/blog';

export const gameplayImages = {
  espRadar: {
    id: 'espRadar',
    src: `${blog}/fc27-clubs-gameplay.webp`,
    blogSrc: `${blog}/fc27-clubs-gameplay.webp`,
    alt: 'EA Sports FC 27 Clubs gameplay with cheat overlays on the pitch',
    caption: 'Clubs gameplay',
    captionDesc: 'Highlight opponents with cheat overlays in Clubs matches.',
  },
  vehicleEsp: {
    id: 'vehicleEsp',
    src: `${blog}/fc27-match-purple-esp-overlay.webp`,
    blogSrc: `${blog}/fc27-match-purple-esp-overlay.webp`,
    alt: 'FC 27 match gameplay with purple ESP overlay highlighting opponents on the pitch',
    caption: 'Purple ESP overlay',
    captionDesc: 'Track every opponent with purple ESP during a live FC 27 match.',
  },
  combatOverlay: {
    id: 'combatOverlay',
    src: `${blog}/fc27-purple-match-overlay.webp`,
    blogSrc: `${blog}/fc27-purple-match-overlay.webp`,
    alt: 'FC 27 purple cheat overlay active during a live match on PC',
    caption: 'Match overlay',
    captionDesc: 'Purple assist overlay stays readable in live matches.',
  },
  aimbotFov: {
    id: 'aimbotFov',
    src: `${blog}/fc27-pitch-gameplay.webp`,
    blogSrc: `${blog}/fc27-pitch-gameplay.webp`,
    alt: 'EA Sports FC 27 cheat gameplay overlay showing assists during a match on the pitch',
    caption: 'Pitch gameplay',
    captionDesc: 'Soft aim and assist overlays during pitch play.',
  },
  airEsp: {
    id: 'airEsp',
    src: `${blog}/fc27-fut-overlay.webp`,
    blogSrc: `${blog}/fc27-fut-overlay.webp`,
    alt: 'EA Sports FC 27 Ultimate Team cheat overlay during a FUT match',
    caption: 'Ultimate Team overlay',
    captionDesc: 'FUT match overlay with assist tools for rivals.',
  },
  groundEsp: {
    id: 'groundEsp',
    src: `${blog}/fc27-clubs-gameplay.webp`,
    blogSrc: `${blog}/fc27-clubs-gameplay.webp`,
    alt: 'EA Sports FC 27 Clubs gameplay with cheat overlays on the pitch',
    caption: 'Clubs gameplay',
    captionDesc: 'Spot opponents early with Clubs-mode overlays.',
  },
  mapRadar: {
    id: 'mapRadar',
    src: `${blog}/fc27-match-purple-esp-overlay.webp`,
    blogSrc: `${blog}/fc27-match-purple-esp-overlay.webp`,
    alt: 'FC 27 match gameplay with purple ESP overlay highlighting opponents on the pitch',
    caption: 'Purple ESP overlay',
    captionDesc: 'Purple ESP outlines and distance tags through traffic.',
  },
  hackResults: {
    id: 'hackResults',
    src: `${blog}/fc27-fut-overlay.webp`,
    blogSrc: `${blog}/fc27-fut-overlay.webp`,
    alt: 'EA Sports FC 27 Ultimate Team cheat overlay during a FUT match',
    caption: 'Ultimate Team overlay',
    captionDesc: 'Ultimate Team overlay for FUT rivals sessions.',
  },
  menuVisuals: {
    id: 'menuVisuals',
    src: `${blog}/fc27-pro-clubs-menu-matchday.webp`,
    blogSrc: `${blog}/fc27-pro-clubs-menu-matchday.webp`,
    alt: 'FC 27 Pro Clubs cheat menu open on Matchday with purple UI panels',
    caption: 'Pro Clubs menu',
    captionDesc: 'Cheat menu panels open on Clubs Matchday.',
  },
  menuWorld: {
    id: 'menuWorld',
    src: `${blog}/fc27-utils-menu.webp`,
    blogSrc: `${blog}/fc27-utils-menu.webp`,
    alt: 'EA Sports FC 27 cheat utility menu showing helper tools and toggles',
    caption: 'Utility tools',
    captionDesc: 'Utility toggles and helper tools in one menu.',
  },
  menuAimbot: {
    id: 'menuAimbot',
    src: `${blog}/fc27-pro-clubs-menu-matchday.webp`,
    blogSrc: `${blog}/fc27-pro-clubs-menu-matchday.webp`,
    alt: 'FC 27 Pro Clubs cheat menu open on Matchday with purple UI panels',
    caption: 'Pro Clubs menu',
    captionDesc: 'Aim and assist options inside the Pro Clubs menu.',
  },
  menuMisc: {
    id: 'menuMisc',
    src: `${blog}/fc27-utils-menu.webp`,
    blogSrc: `${blog}/fc27-utils-menu.webp`,
    alt: 'EA Sports FC 27 cheat utility menu showing helper tools and toggles',
    caption: 'Utility tools',
    captionDesc: 'Stream-proof and utility toggles in the helper menu.',
  },
} as const satisfies Record<string, GameplayImage>;

export type GameplayImageId = keyof typeof gameplayImages;

export function getGameplayImage(id: GameplayImageId): GameplayImage {
  return gameplayImages[id];
}
