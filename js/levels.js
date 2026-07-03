import { GROUND_Y } from "./physics.js";

  // ---------- Themes ----------
  export const THEMES = {
    candy:     { name:"Confection Kingdom" },
    castle:    { name:"Castle Confectiana" },
    underwater:{ name:"Sugar Reef" },
    space:     { name:"Galactic Frontier" },
    haunted:   { name:"Pumpkin Hollow" },
    christmas: { name:"North Pole Frosting" },
    toy:       { name:"Andy's Playroom" },
    dino:      { name:"Jurassic Crunch" },
    monsoon:   { name:"Mount Ararat Monsoon" },
    moria:     { name:"The Mines of Moria" },
    sky:       { name:"Cumulus Kingdom" },
    island:    { name:"Sandy Paws Cove" },
    kittyland: { name:"Kitty Cat Island" },
    city:      { name:"Meowtropolis Downtown" },
    jungle:    { name:"Wildcat Jungle" },
    mushroom:  { name:"Super Meow World" }
  };

  // ======================================================================
  //  LEVELS  — data-driven. Each gap <=130px, each rise <=115px,
  //  no platform over a pit. (Verified by the reachability checker.)
  // ======================================================================
  export const LEVELS = [
    // -------- WORLD 1: candy meadow --------
    {
      name: "Confection Kingdom", theme: "candy",
      goalX: 4120, worldW: 4260,
      platforms: [
        {x:0,    y:430, w:560, h:170, t:"choco"},
        {x:690,  y:430, w:490, h:170, t:"choco"},
        {x:1310, y:430, w:510, h:170, t:"choco"},
        {x:1950, y:430, w:570, h:170, t:"choco"},
        {x:2650, y:430, w:530, h:170, t:"choco"},
        {x:3300, y:430, w:960, h:170, t:"choco"},
        {x:300,  y:340, w:110, h:26, t:"cookie"},
        {x:760,  y:350, w:110, h:26, t:"candycane"},
        {x:980,  y:330, w:110, h:26, t:"wafer"},
        {x:1400, y:345, w:120, h:26, t:"cookie"},
        {x:1600, y:330, w:110, h:26, t:"candycane"},
        {x:2050, y:350, w:120, h:26, t:"wafer"},
        {x:2280, y:335, w:110, h:26, t:"cookie"},
        {x:2750, y:345, w:110, h:26, t:"candycane"},
        {x:2950, y:330, w:120, h:26, t:"wafer"},
        {x:3380, y:345, w:120, h:26, t:"cookie"},
        {x:3600, y:335, w:120, h:26, t:"candycane"},
      ],
      collectibles: [
        {x:355,y:316,t:"fish"},{x:605,y:320,t:"mouse"},{x:815,y:326,t:"mouse"},
        {x:1035,y:306,t:"mouse"},{x:1225,y:320,t:"mouse"},{x:1460,y:321,t:"fish"},
        {x:1655,y:306,t:"mouse"},{x:1865,y:320,t:"mouse"},{x:2110,y:326,t:"mouse"},
        {x:2335,y:311,t:"mouse"},{x:2565,y:320,t:"mouse"},{x:2805,y:321,t:"fish"},
        {x:3010,y:306,t:"mouse"},{x:3225,y:320,t:"mouse"},{x:3440,y:321,t:"mouse"},
        {x:3660,y:311,t:"fish"},{x:3850,y:398,t:"mouse"},{x:3980,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:710,  max:1150},
        {x:1450,min:1340, max:1780},
        {x:2150,min:1970, max:2480},
        {x:2850,min:2680, max:3140},
        {x:3500,min:3320, max:3760},
      ],
      hazards: [],
      boss: null
    },

    // -------- WORLD 2: lava castle + Gummy King --------
    {
      name: "Castle Confectiana", theme: "castle",
      goalX: 3300, worldW: 3600,
      platforms: [
        {x:0,    y:430, w:520, h:170, t:"darkbrick"},
        {x:650,  y:430, w:430, h:170, t:"darkbrick"},
        {x:1210, y:430, w:430, h:170, t:"darkbrick"},
        {x:1770, y:430, w:530, h:170, t:"darkbrick"},
        {x:2420, y:430, w:1080,h:170, t:"darkbrick"},   // boss arena
        {x:280,  y:330, w:100, h:24, t:"peppermint"},
        {x:760,  y:320, w:100, h:24, t:"stone"},
        {x:960,  y:340, w:100, h:24, t:"peppermint"},
        {x:1320, y:325, w:110, h:24, t:"stone"},
        {x:1520, y:315, w:100, h:24, t:"peppermint"},
        {x:1880, y:330, w:110, h:24, t:"stone"},
        {x:2080, y:315, w:100, h:24, t:"peppermint"},
        {x:2180, y:345, w:100, h:24, t:"stone"},
      ],
      collectibles: [
        {x:330,y:306,t:"fish"},{x:585,y:320,t:"mouse"},{x:810,y:296,t:"mouse"},
        {x:1010,y:316,t:"mouse"},{x:1145,y:320,t:"mouse"},{x:1370,y:301,t:"fish"},
        {x:1570,y:291,t:"mouse"},{x:1705,y:320,t:"mouse"},{x:1930,y:306,t:"mouse"},
        {x:2130,y:291,t:"mouse"},{x:2360,y:320,t:"mouse"},{x:2600,y:398,t:"fish"},
        {x:2760,y:398,t:"mouse"},{x:2920,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1050, vx:1.5},
        {x:1450,min:1240, max:1600, vx:1.5},
        {x:2000,min:1800, max:2270, vx:1.6},
      ],
      hazards: [
        {x:520, y:GROUND_Y+22, w:130, h:220},
        {x:1080,y:GROUND_Y+22, w:130, h:220},
        {x:1640,y:GROUND_Y+22, w:130, h:220},
        {x:2300,y:GROUND_Y+22, w:120, h:220},
      ],
      boss: { x:2950, w:92, h:80, hp:3, vx:1.7, min:2520, max:3230, name:"Gummy King" }
    },

    // -------- WORLD 3: underwater coral reef --------
    {
      name: "Sugar Reef", theme: "underwater",
      goalX: 4050, worldW: 4200,
      platforms: [
        {x:0,    y:430, w:580, h:170, t:"reefrock"},
        {x:710,  y:430, w:480, h:170, t:"reefrock"},
        {x:1320, y:430, w:510, h:170, t:"reefrock"},
        {x:1960, y:430, w:520, h:170, t:"reefrock"},
        {x:2610, y:430, w:540, h:170, t:"reefrock"},
        {x:3280, y:430, w:920, h:170, t:"reefrock"},
        {x:300,  y:340, w:110, h:26, t:"coral"},
        {x:770,  y:350, w:110, h:26, t:"shell", moveX:55, moveSpeed:1.0},
        {x:990,  y:330, w:110, h:26, t:"chest"},
        {x:1390, y:345, w:120, h:26, t:"coral"},
        {x:1610, y:330, w:110, h:26, t:"shell", moveX:60, moveSpeed:0.9},
        {x:2050, y:350, w:120, h:26, t:"chest"},
        {x:2270, y:335, w:110, h:26, t:"coral"},
        {x:2720, y:345, w:110, h:26, t:"shell", moveX:55, moveSpeed:1.1},
        {x:2920, y:330, w:120, h:26, t:"chest"},
        {x:3360, y:345, w:120, h:26, t:"coral"},
        {x:3580, y:335, w:120, h:26, t:"shell", moveX:60, moveSpeed:1.0},
      ],
      collectibles: [
        {x:355,y:316,t:"fish"}, {x:605,y:398,t:"mouse"},{x:825,y:326,t:"mouse"},
        {x:1045,y:306,t:"mouse"},{x:1250,y:398,t:"mouse"},{x:1445,y:321,t:"fish"},
        {x:1665,y:306,t:"mouse"},{x:1900,y:398,t:"mouse"},{x:2105,y:326,t:"mouse"},
        {x:2325,y:311,t:"mouse"},{x:2555,y:398,t:"mouse"},{x:2775,y:321,t:"fish"},
        {x:2975,y:306,t:"mouse"},{x:3215,y:398,t:"mouse"},{x:3415,y:321,t:"mouse"},
        {x:3635,y:311,t:"fish"}, {x:3850,y:398,t:"mouse"},{x:3980,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:710,  max:1180, vx:1.5},
        {x:1500,min:1320, max:1820, vx:1.5},
        {x:2150,min:1970, max:2470, vx:1.6},
        {x:2800,min:2620, max:3140, vx:1.6},
        {x:3500,min:3290, max:3760, vx:1.6},
      ],
      hazards: [
        {x:580, y:GROUND_Y+22, w:130, h:220},
        {x:1190,y:GROUND_Y+22, w:130, h:220},
        {x:1830,y:GROUND_Y+22, w:130, h:220},
        {x:2480,y:GROUND_Y+22, w:130, h:220},
        {x:3150,y:GROUND_Y+22, w:130, h:220},
      ],
      boss: null
    },

    // -------- WORLD 4: outer space --------
    {
      name: "Galactic Frontier", theme: "space",
      goalX: 4250, worldW: 4400,
      platforms: [
        {x:0,    y:430, w:540, h:170, t:"moonrock"},
        {x:670,  y:430, w:460, h:170, t:"moonrock"},
        {x:1260, y:430, w:480, h:170, t:"moonrock"},
        {x:1870, y:430, w:520, h:170, t:"moonrock"},
        {x:2520, y:430, w:500, h:170, t:"moonrock"},
        {x:3150, y:430, w:480, h:170, t:"moonrock"},
        {x:3760, y:430, w:560, h:170, t:"moonrock"},
        {x:280,  y:340, w:100, h:24, t:"asteroid"},
        {x:780,  y:350, w:100, h:24, t:"satellite"},
        {x:1000, y:330, w:100, h:24, t:"asteroid"},
        {x:1340, y:345, w:110, h:24, t:"satellite"},
        {x:1560, y:330, w:100, h:24, t:"asteroid"},
        {x:1980, y:350, w:110, h:24, t:"satellite"},
        {x:2200, y:335, w:100, h:24, t:"asteroid"},
        {x:2620, y:345, w:100, h:24, t:"satellite"},
        {x:2820, y:330, w:110, h:24, t:"asteroid"},
        {x:3220, y:345, w:110, h:24, t:"satellite"},
        {x:3420, y:335, w:100, h:24, t:"asteroid"},
        {x:3900, y:340, w:110, h:24, t:"satellite"},
      ],
      collectibles: [
        {x:330,y:316,t:"fish"}, {x:605,y:398,t:"mouse"},{x:830,y:326,t:"mouse"},
        {x:1050,y:306,t:"mouse"},{x:1190,y:398,t:"mouse"},{x:1395,y:321,t:"fish"},
        {x:1610,y:306,t:"mouse"},{x:1840,y:398,t:"mouse"},{x:2030,y:326,t:"mouse"},
        {x:2250,y:311,t:"mouse"},{x:2470,y:398,t:"mouse"},{x:2670,y:321,t:"fish"},
        {x:2870,y:306,t:"mouse"},{x:3105,y:398,t:"mouse"},{x:3275,y:321,t:"mouse"},
        {x:3475,y:311,t:"mouse"},{x:3690,y:398,t:"mouse"},{x:3950,y:316,t:"fish"},
        {x:4150,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1100, vx:1.7},
        {x:1450,min:1280, max:1700, vx:1.7},
        {x:2100,min:1900, max:2350, vx:1.8},
        {x:2700,min:2540, max:2980, vx:1.8},
        {x:3300,min:3170, max:3590, vx:1.9},
        {x:3950,min:3780, max:4280, vx:1.8},
      ],
      hazards: [
        {x:545, y:GROUND_Y+22, w:120, h:220},
        {x:1135,y:GROUND_Y+22, w:120, h:220},
        {x:1745,y:GROUND_Y+22, w:120, h:220},
        {x:2395,y:GROUND_Y+22, w:120, h:220},
        {x:3025,y:GROUND_Y+22, w:120, h:220},
        {x:3635,y:GROUND_Y+22, w:120, h:220},
      ],
      boss: null
    },

    // -------- WORLD 5: haunted halloween hollow --------
    {
      name: "Pumpkin Hollow", theme: "haunted",
      goalX: 4250, worldW: 4400,
      platforms: [
        {x:0,    y:430, w:560, h:170, t:"graveground"},
        {x:680,  y:430, w:440, h:170, t:"graveground"},
        {x:1240, y:430, w:480, h:170, t:"graveground"},
        {x:1840, y:430, w:480, h:170, t:"graveground"},
        {x:2450, y:430, w:500, h:170, t:"graveground"},
        {x:3080, y:430, w:480, h:170, t:"graveground"},
        {x:3690, y:430, w:710, h:170, t:"graveground"},
        {x:300,  y:340, w:110, h:26, t:"tombstone"},
        {x:760,  y:350, w:110, h:26, t:"pumpkin", moveX:55, moveSpeed:1.0},
        {x:980,  y:330, w:110, h:26, t:"coffin"},
        {x:1340, y:345, w:120, h:26, t:"tombstone"},
        {x:1570, y:330, w:110, h:26, t:"pumpkin", moveX:50, moveSpeed:0.9},
        {x:1940, y:350, w:120, h:26, t:"coffin"},
        {x:2170, y:335, w:110, h:26, t:"tombstone"},
        {x:2540, y:345, w:110, h:26, t:"pumpkin", moveX:60, moveSpeed:1.1},
        {x:2760, y:330, w:120, h:26, t:"coffin"},
        {x:3180, y:345, w:120, h:26, t:"tombstone"},
        {x:3400, y:335, w:110, h:26, t:"pumpkin", moveX:55, moveSpeed:0.9},
        {x:3800, y:340, w:110, h:26, t:"coffin"},
      ],
      collectibles: [
        {x:355,y:316,t:"fish"}, {x:605,y:398,t:"mouse"},{x:815,y:326,t:"mouse"},
        {x:1035,y:306,t:"mouse"},{x:1180,y:398,t:"mouse"},{x:1395,y:321,t:"fish"},
        {x:1625,y:306,t:"mouse"},{x:1860,y:398,t:"mouse"},{x:1995,y:326,t:"mouse"},
        {x:2225,y:311,t:"mouse"},{x:2470,y:398,t:"mouse"},{x:2595,y:321,t:"fish"},
        {x:2815,y:306,t:"mouse"},{x:3105,y:398,t:"mouse"},{x:3235,y:321,t:"mouse"},
        {x:3455,y:311,t:"fish"}, {x:3720,y:398,t:"mouse"},{x:3855,y:316,t:"fish"},
        {x:4100,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1100, vx:1.8},
        {x:1450,min:1240, max:1700, vx:1.8},
        {x:2050,min:1840, max:2300, vx:1.9},
        {x:2700,min:2470, max:2920, vx:1.9},
        {x:3300,min:3100, max:3540, vx:2.0},
        {x:3950,min:3720, max:4200, vx:1.9},
      ],
      hazards: [
        {x:585, y:GROUND_Y+22, w:90,  h:220},
        {x:1145,y:GROUND_Y+22, w:90,  h:220},
        {x:1725,y:GROUND_Y+22, w:115, h:220},
        {x:2325,y:GROUND_Y+22, w:125, h:220},
        {x:2955,y:GROUND_Y+22, w:125, h:220},
        {x:3565,y:GROUND_Y+22, w:125, h:220},
      ],
      boss: null
    },

    // -------- WORLD 6: north pole christmas + Grinch boss --------
    {
      name: "North Pole Frosting", theme: "christmas",
      goalX: 4250, worldW: 4400,
      platforms: [
        {x:0,    y:430, w:540, h:170, t:"snowground"},
        {x:670,  y:430, w:430, h:170, t:"snowground"},
        {x:1230, y:430, w:430, h:170, t:"snowground"},
        {x:1790, y:430, w:520, h:170, t:"snowground"},
        {x:2440, y:430, w:480, h:170, t:"snowground"},
        {x:3050, y:430, w:1350,h:170, t:"snowground"},   // Grinch boss arena
        {x:280,  y:330, w:110, h:24, t:"gingerbread"},
        {x:760,  y:320, w:100, h:24, t:"giftbox"},
        {x:960,  y:340, w:110, h:24, t:"candycane"},
        {x:1320, y:325, w:120, h:24, t:"gingerbread"},
        {x:1520, y:315, w:100, h:24, t:"giftbox"},
        {x:1880, y:330, w:110, h:24, t:"candycane"},
        {x:2080, y:315, w:100, h:24, t:"gingerbread"},
        {x:2200, y:345, w:100, h:24, t:"giftbox"},
        {x:2580, y:340, w:110, h:24, t:"candycane"},
        {x:2780, y:320, w:110, h:24, t:"gingerbread"},
      ],
      collectibles: [
        {x:330,y:306,t:"fish"}, {x:580,y:398,t:"mouse"},{x:815,y:296,t:"mouse"},
        {x:1015,y:316,t:"mouse"},{x:1160,y:398,t:"fish"},{x:1380,y:301,t:"fish"},
        {x:1570,y:291,t:"mouse"},{x:1715,y:398,t:"mouse"},{x:1935,y:306,t:"mouse"},
        {x:2135,y:291,t:"mouse"},{x:2380,y:398,t:"mouse"},{x:2630,y:316,t:"fish"},
        {x:2840,y:296,t:"mouse"},{x:3150,y:398,t:"mouse"},{x:3350,y:398,t:"mouse"},
        {x:3550,y:398,t:"fish"}, {x:3800,y:398,t:"mouse"},{x:4000,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1080, vx:1.7},
        {x:1450,min:1240, max:1640, vx:1.7},
        {x:2000,min:1820, max:2280, vx:1.8},
        {x:2650,min:2470, max:2900, vx:1.8},
      ],
      hazards: [
        {x:540, y:GROUND_Y+22, w:130, h:220},
        {x:1100,y:GROUND_Y+22, w:130, h:220},
        {x:1660,y:GROUND_Y+22, w:130, h:220},
        {x:2310,y:GROUND_Y+22, w:130, h:220},
        {x:2920,y:GROUND_Y+22, w:130, h:220},
      ],
      boss: { x:3700, w:100, h:88, hp:3, vx:1.8, min:3160, max:4180, name:"Grinch" }
    },

    // -------- WORLD 7: toy story — cat-sized inside the playroom --------
    {
      name: "Andy's Playroom", theme: "toy",
      goalX: 4250, worldW: 4400,
      platforms: [
        {x:0,    y:430, w:560, h:170, t:"woodfloor"},
        {x:680,  y:430, w:440, h:170, t:"woodfloor"},
        {x:1240, y:430, w:480, h:170, t:"woodfloor"},
        {x:1840, y:430, w:480, h:170, t:"woodfloor"},
        {x:2450, y:430, w:500, h:170, t:"woodfloor"},
        {x:3080, y:430, w:480, h:170, t:"woodfloor"},
        {x:3690, y:430, w:710, h:170, t:"woodfloor"},
        {x:300,  y:340, w:110, h:26, t:"block"},
        {x:760,  y:350, w:110, h:26, t:"bookstack", moveX:60, moveSpeed:1.1},
        {x:980,  y:330, w:110, h:26, t:"stud"},
        {x:1340, y:345, w:120, h:26, t:"crayon"},
        {x:1570, y:330, w:110, h:26, t:"block"},
        {x:1940, y:350, w:120, h:26, t:"bookstack", moveX:55, moveSpeed:1.0},
        {x:2170, y:335, w:110, h:26, t:"stud"},
        {x:2540, y:345, w:110, h:26, t:"crayon"},
        {x:2760, y:330, w:120, h:26, t:"block"},
        {x:3180, y:345, w:120, h:26, t:"bookstack", moveX:65, moveSpeed:1.2},
        {x:3400, y:335, w:110, h:26, t:"stud"},
        {x:3800, y:340, w:110, h:26, t:"crayon"},
      ],
      collectibles: [
        {x:355,y:316,t:"fish"}, {x:605,y:398,t:"mouse"},{x:815,y:326,t:"mouse"},
        {x:1035,y:306,t:"mouse"},{x:1180,y:398,t:"mouse"},{x:1395,y:321,t:"fish"},
        {x:1625,y:306,t:"mouse"},{x:1860,y:398,t:"mouse"},{x:1995,y:326,t:"mouse"},
        {x:2225,y:311,t:"mouse"},{x:2470,y:398,t:"mouse"},{x:2595,y:321,t:"fish"},
        {x:2815,y:306,t:"mouse"},{x:3105,y:398,t:"mouse"},{x:3235,y:321,t:"mouse"},
        {x:3455,y:311,t:"fish"}, {x:3720,y:398,t:"mouse"},{x:3855,y:316,t:"fish"},
        {x:4100,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1100, vx:1.8},
        {x:1450,min:1240, max:1700, vx:1.8},
        {x:2050,min:1840, max:2300, vx:1.9},
        {x:2700,min:2470, max:2920, vx:1.9},
        {x:3300,min:3100, max:3540, vx:2.0},
        {x:3950,min:3720, max:4200, vx:1.9},
      ],
      hazards: [
        {x:585, y:GROUND_Y+22, w:90,  h:220},
        {x:1145,y:GROUND_Y+22, w:90,  h:220},
        {x:1725,y:GROUND_Y+22, w:115, h:220},
        {x:2325,y:GROUND_Y+22, w:125, h:220},
        {x:2955,y:GROUND_Y+22, w:125, h:220},
        {x:3565,y:GROUND_Y+22, w:125, h:220},
      ],
      boss: null
    },

    // -------- WORLD 8: prehistoric jungle + T-Rex boss --------
    {
      name: "Jurassic Crunch", theme: "dino",
      goalX: 4250, worldW: 4400,
      platforms: [
        {x:0,    y:430, w:540, h:170, t:"dirtgrass"},
        {x:670,  y:430, w:430, h:170, t:"dirtgrass"},
        {x:1230, y:430, w:430, h:170, t:"dirtgrass"},
        {x:1790, y:430, w:520, h:170, t:"dirtgrass"},
        {x:2440, y:430, w:480, h:170, t:"dirtgrass"},
        {x:3050, y:430, w:1350,h:170, t:"dirtgrass"},   // T-Rex boss arena
        {x:280,  y:330, w:110, h:24, t:"egg"},
        {x:760,  y:320, w:100, h:24, t:"boulder"},
        {x:960,  y:340, w:110, h:24, t:"log"},
        {x:1320, y:325, w:120, h:24, t:"egg"},
        {x:1520, y:315, w:100, h:24, t:"boulder"},
        {x:1880, y:330, w:110, h:24, t:"log"},
        {x:2080, y:315, w:100, h:24, t:"egg"},
        {x:2200, y:345, w:100, h:24, t:"boulder"},
        {x:2580, y:340, w:110, h:24, t:"log"},
        {x:2780, y:320, w:110, h:24, t:"egg"},
      ],
      collectibles: [
        {x:330,y:306,t:"fish"}, {x:580,y:398,t:"mouse"},{x:815,y:296,t:"mouse"},
        {x:1015,y:316,t:"mouse"},{x:1160,y:398,t:"fish"},{x:1380,y:301,t:"fish"},
        {x:1570,y:291,t:"mouse"},{x:1715,y:398,t:"mouse"},{x:1935,y:306,t:"mouse"},
        {x:2135,y:291,t:"mouse"},{x:2380,y:398,t:"mouse"},{x:2630,y:316,t:"fish"},
        {x:2840,y:296,t:"mouse"},{x:3150,y:398,t:"mouse"},{x:3350,y:398,t:"mouse"},
        {x:3550,y:398,t:"fish"}, {x:3800,y:398,t:"mouse"},{x:4000,y:398,t:"mouse"},
      ],
      enemies: [
        {x:850, min:680,  max:1080, vx:1.9},
        {x:1450,min:1240, max:1640, vx:1.9},
        {x:2000,min:1820, max:2280, vx:2.0},
        {x:2650,min:2470, max:2900, vx:2.0},
      ],
      hazards: [
        {x:540, y:GROUND_Y+22, w:130, h:220},
        {x:1100,y:GROUND_Y+22, w:130, h:220},
        {x:1660,y:GROUND_Y+22, w:130, h:220},
        {x:2310,y:GROUND_Y+22, w:130, h:220},
        {x:2920,y:GROUND_Y+22, w:130, h:220},
      ],
      boss: { x:3700, w:112, h:96, hp:3, vx:1.9, min:3160, max:4180, name:"T-Rex" }
    },
    {
      name: "Mount Ararat Monsoon", theme: "monsoon",
      goalX: 4180, worldW: 4400,
      platforms: [
        // mountaintops poking out above the flood
        {x:0,    y:430, w:520, h:170, t:"hilltop"},
        {x:660,  y:430, w:420, h:170, t:"hilltop"},
        {x:1220, y:430, w:430, h:170, t:"hilltop"},
        {x:1790, y:430, w:480, h:170, t:"hilltop"},
        {x:2400, y:430, w:460, h:170, t:"hilltop"},
        {x:3000, y:430, w:1400,h:170, t:"hilltop"},   // long landing approach to the ark
        // floating debris — rooftops, driftwood, cargo crates
        {x:260,  y:330, w:110, h:24, t:"rooftop"},
        {x:560,  y:320, w:100, h:24, t:"driftwood", moveX:45, moveSpeed:0.9},
        {x:790,  y:340, w:110, h:24, t:"crate", moveX:40, moveSpeed:0.8},
        {x:990,  y:330, w:110, h:24, t:"rooftop"},
        {x:1320, y:325, w:120, h:24, t:"driftwood", moveX:50, moveSpeed:1.0},
        {x:1530, y:315, w:100, h:24, t:"crate"},
        {x:1880, y:330, w:110, h:24, t:"rooftop"},
        {x:2080, y:315, w:100, h:24, t:"driftwood", moveX:45, moveSpeed:0.9},
        {x:2210, y:345, w:100, h:24, t:"crate", moveX:40, moveSpeed:0.8},
        {x:2580, y:340, w:110, h:24, t:"rooftop"},
        {x:2790, y:320, w:110, h:24, t:"driftwood", moveX:50, moveSpeed:1.0},
        {x:2940, y:340, w:100, h:24, t:"crate"},      // bridges last pit
        {x:3220, y:330, w:110, h:24, t:"rooftop"},
        {x:3520, y:320, w:110, h:24, t:"driftwood", moveX:45, moveSpeed:0.9},
        {x:3820, y:340, w:100, h:24, t:"crate"},
      ],
      collectibles: [
        // stranded animal pairs — two of each kind, placed close together
        {x:160, y:398, t:"pair", kind:"giraffe"},
        {x:220, y:398, t:"pair", kind:"giraffe"},
        {x:580, y:296, t:"pair", kind:"elephant"},
        {x:620, y:296, t:"pair", kind:"elephant"},
        {x:1330,y:301, t:"pair", kind:"lion"},
        {x:1380,y:301, t:"pair", kind:"lion"},
        {x:2080,y:291, t:"pair", kind:"monkey"},
        {x:2120,y:291, t:"pair", kind:"monkey"},
        {x:2840,y:398, t:"pair", kind:"giraffe"},
        {x:2900,y:398, t:"pair", kind:"giraffe"},
        {x:3300,y:398, t:"pair", kind:"elephant"},
        {x:3360,y:398, t:"pair", kind:"elephant"},
        // mice (eligible for candy power-up drops)
        {x:380, y:398, t:"mouse"},
        {x:1900,y:398, t:"mouse"},
        {x:3700,y:398, t:"mouse"},
        // fish for grow-ups
        {x:1015,y:316, t:"fish"},
        {x:2585,y:326, t:"fish"},
        {x:3950,y:398, t:"fish"},
      ],
      enemies: [
        {x:860,  min:680,  max:1080, vx:1.9},
        {x:1450, min:1240, max:1640, vx:2.0},
        {x:2050, min:1820, max:2270, vx:1.9},
        {x:2650, min:2470, max:2860, vx:2.0},
      ],
      hazards: [
        {x:520, y:GROUND_Y+22, w:140, h:220},
        {x:1080,y:GROUND_Y+22, w:140, h:220},
        {x:1650,y:GROUND_Y+22, w:140, h:220},
        {x:2270,y:GROUND_Y+22, w:130, h:220},
        {x:2860,y:GROUND_Y+22, w:140, h:220},
      ],
      boss: null
    },
    // -------- WORLD 10: Mines of Moria + Balrog boss --------
    {
      name: "The Mines of Moria", theme: "moria",
      goalX: 4180, worldW: 4400,
      platforms: [
        // dwarven stone floors interrupted by molten cracks
        {x:0,    y:430, w:540, h:170, t:"dwarvenstone"},
        {x:680,  y:430, w:420, h:170, t:"dwarvenstone"},
        {x:1240, y:430, w:430, h:170, t:"dwarvenstone"},
        {x:1810, y:430, w:480, h:170, t:"dwarvenstone"},
        {x:2430, y:430, w:460, h:170, t:"dwarvenstone"},
        // Bridge of Khazad-dûm — the long boss arena
        {x:3030, y:430, w:1370,h:170, t:"bridge"},
        // broken column tops + rubble piles strewn between the floors
        {x:280,  y:330, w:110, h:24, t:"pillar"},
        {x:560,  y:320, w:100, h:24, t:"rubble"},
        {x:790,  y:340, w:110, h:24, t:"pillar"},
        {x:990,  y:330, w:110, h:24, t:"rubble"},
        {x:1320, y:325, w:120, h:24, t:"pillar"},
        {x:1530, y:315, w:100, h:24, t:"rubble"},
        {x:1880, y:330, w:110, h:24, t:"pillar"},
        {x:2080, y:315, w:100, h:24, t:"rubble"},
        {x:2210, y:345, w:100, h:24, t:"pillar"},
        {x:2580, y:340, w:110, h:24, t:"rubble"},
        {x:2790, y:320, w:110, h:24, t:"pillar"},
        {x:2950, y:340, w:100, h:24, t:"rubble"},   // bridges the last pit before the boss arena
      ],
      collectibles: [
        // rings — golden rings strewn through Balin's tomb
        {x:160, y:398, t:"ring"},
        {x:340, y:398, t:"ring"},
        {x:760, y:398, t:"ring"},
        {x:1015,y:316, t:"ring"},
        {x:1380,y:301, t:"ring"},
        {x:1900,y:398, t:"ring"},
        {x:2135,y:291, t:"ring"},
        {x:2380,y:398, t:"ring"},
        {x:2630,y:316, t:"ring"},
        {x:2840,y:296, t:"ring"},
        // a few mice (so candy-power drops still randomize in)
        {x:580, y:398, t:"mouse"},
        {x:1500,y:398, t:"mouse"},
        {x:3300,y:398, t:"mouse"},
        // fish (lembas-bread stand-ins) for grow-ups
        {x:1160,y:398, t:"fish"},
        {x:2440,y:398, t:"fish"},
        {x:3700,y:398, t:"fish"},
      ],
      enemies: [
        {x:850, min:680,  max:1080, vx:2.0},
        {x:1450,min:1260, max:1660, vx:2.0},
        {x:2000,min:1840, max:2280, vx:2.1},
        {x:2650,min:2470, max:2880, vx:2.1},
      ],
      hazards: [
        {x:540, y:GROUND_Y+22, w:140, h:220},
        {x:1100,y:GROUND_Y+22, w:140, h:220},
        {x:1670,y:GROUND_Y+22, w:140, h:220},
        {x:2290,y:GROUND_Y+22, w:140, h:220},
        {x:2890,y:GROUND_Y+22, w:140, h:220},
      ],
      boss: { x:3700, w:120, h:104, hp:3, vx:1.9, min:3180, max:4180, name:"Balrog" }
    },
    // -------- WORLD 11: above the clouds, hop sky island to sky island --------
    {
      name: "Cumulus Kingdom", theme: "sky",
      goalX: 4180, worldW: 4400,
      platforms: [
        // big puffy cumulus "islands" — the walkable ground
        {x:0,    y:430, w:520, h:170, t:"bigcloud"},
        {x:660,  y:430, w:420, h:170, t:"bigcloud"},
        {x:1240, y:430, w:430, h:170, t:"bigcloud"},
        {x:1810, y:430, w:480, h:170, t:"bigcloud"},
        {x:2430, y:430, w:460, h:170, t:"bigcloud"},
        {x:3030, y:430, w:1370,h:170, t:"bigcloud"},   // long approach to the cloud castle
        // little stepping clouds + occasional rainbow arcs spanning the gaps
        {x:280,  y:330, w:110, h:24, t:"cloud", moveX:40, moveSpeed:0.6},
        {x:560,  y:320, w:100, h:24, t:"rainbow", moveX:50, moveSpeed:0.7},
        {x:790,  y:340, w:110, h:24, t:"cloud", moveX:35, moveSpeed:0.6},
        {x:990,  y:330, w:110, h:24, t:"cloud", moveX:45, moveSpeed:0.65},
        {x:1320, y:325, w:120, h:24, t:"cloud", moveX:40, moveSpeed:0.6},
        {x:1530, y:315, w:100, h:24, t:"rainbow", moveX:55, moveSpeed:0.7},
        {x:1880, y:330, w:110, h:24, t:"cloud", moveX:45, moveSpeed:0.65},
        {x:2080, y:315, w:100, h:24, t:"cloud", moveX:40, moveSpeed:0.6},
        {x:2210, y:345, w:100, h:24, t:"cloud", moveX:35, moveSpeed:0.65},
        {x:2580, y:340, w:110, h:24, t:"rainbow", moveX:60, moveSpeed:0.8},
        {x:2790, y:320, w:110, h:24, t:"cloud", moveX:45, moveSpeed:0.65},
        {x:2950, y:340, w:100, h:24, t:"cloud", moveX:40, moveSpeed:0.6},
      ],
      collectibles: [
        // golden feathers drifting through the sky
        {x:160, y:398, t:"feather"},
        {x:340, y:398, t:"feather"},
        {x:580, y:296, t:"feather"},
        {x:815, y:316, t:"feather"},
        {x:1015,y:306, t:"feather"},
        {x:1380,y:301, t:"feather"},
        {x:1900,y:306, t:"feather"},
        {x:2135,y:291, t:"feather"},
        {x:2600,y:316, t:"feather"},
        {x:2840,y:296, t:"feather"},
        {x:3300,y:398, t:"feather"},
        {x:3700,y:398, t:"feather"},
        // mice (so the candy-drop randomizer has something to convert)
        {x:760, y:398, t:"mouse"},
        {x:1500,y:398, t:"mouse"},
        {x:3550,y:398, t:"mouse"},
        // fish (grow-ups)
        {x:1160,y:398, t:"fish"},
        {x:2440,y:398, t:"fish"},
        {x:3950,y:398, t:"fish"},
      ],
      enemies: [
        {x:850, min:680,  max:1080, vx:1.8},
        {x:1450,min:1260, max:1660, vx:1.9},
        {x:2050,min:1840, max:2280, vx:1.9},
        {x:2650,min:2470, max:2880, vx:1.9},
      ],
      // no hazards — the gaps between cloud islands are open sky.
      // missing a jump falls past the world bottom and triggers loseLife() naturally.
      hazards: [],
      boss: null
    },
    // -------- WORLD 12: Kitty Cat Island — sandy islets across a turquoise sea --------
    {
      name: "Sandy Paws Cove", theme: "island",
      goalX: 4160, worldW: 4300,
      platforms: [
        // sandy islets — the walkable ground
        {x:0,    y:430, w:560,  h:170, t:"sand"},
        {x:690,  y:430, w:480,  h:170, t:"sand"},
        {x:1320, y:430, w:520,  h:170, t:"sand"},
        {x:1970, y:430, w:460,  h:170, t:"sand"},
        {x:2580, y:430, w:520,  h:170, t:"sand"},
        {x:3230, y:430, w:1070, h:170, t:"sand"},   // long beach up to the sandcastle
        // palm canopies over the islets (coconuts float above them)
        {x:300,  y:340, w:110, h:26, t:"palm"},
        {x:780,  y:335, w:110, h:26, t:"palm"},
        {x:1450, y:330, w:120, h:26, t:"palm"},
        {x:2080, y:340, w:110, h:26, t:"palm"},
        {x:2760, y:330, w:120, h:26, t:"palm"},
        {x:3400, y:335, w:110, h:26, t:"palm"},
        {x:3650, y:320, w:110, h:26, t:"palm"},
        // driftwood planks bridging the two widest channels
        {x:1195, y:350, w:100, h:24, t:"driftwood"},
        {x:2455, y:350, w:100, h:24, t:"driftwood"},
      ],
      collectibles: [
        // coconuts above the palm canopies
        {x:355,  y:306, t:"coconut"},
        {x:835,  y:301, t:"coconut"},
        {x:1510, y:296, t:"coconut"},
        {x:2135, y:306, t:"coconut"},
        {x:2820, y:296, t:"coconut"},
        {x:3455, y:301, t:"coconut"},
        {x:3705, y:286, t:"coconut"},
        // bonus coconuts over the driftwood bridges
        {x:1245, y:316, t:"coconut"},
        {x:2505, y:316, t:"coconut"},
        // mice (the candy-drop randomizer converts 1-2 of these)
        {x:450,  y:398, t:"mouse"},
        {x:1050, y:398, t:"mouse"},
        {x:1900, y:398, t:"mouse"},
        {x:2300, y:398, t:"mouse"},
        {x:3320, y:398, t:"mouse"},
        {x:3850, y:398, t:"mouse"},
        // fish (grow-ups)
        {x:200,  y:398, t:"fish"},
        {x:1600, y:398, t:"fish"},
        {x:2900, y:398, t:"fish"},
        {x:4000, y:398, t:"fish"},
      ],
      enemies: [
        {x:800,  min:700,  max:1060, vx:1.6},
        {x:1500, min:1340, max:1750, vx:1.7},
        {x:2100, min:1990, max:2340, vx:1.7},
        {x:2700, min:2600, max:3010, vx:1.8},
        {x:3500, min:3250, max:3800, vx:1.8},
        {x:3950, min:3860, max:4100, vx:1.6},
      ],
      // turquoise sea filling every channel between islets
      hazards: [
        {x:560,  y:GROUND_Y+22, w:130, h:220},
        {x:1170, y:GROUND_Y+22, w:150, h:220},
        {x:1840, y:GROUND_Y+22, w:130, h:220},
        {x:2430, y:GROUND_Y+22, w:150, h:220},
        {x:3100, y:GROUND_Y+22, w:130, h:220},
      ],
      boss: null
    },
    // -------- WORLD 13: Kitty Cat Island — a whole land of kitty cats and cat accessories --------
    {
      name: "Kitty Cat Island", theme: "kittyland",
      goalX: 4150, worldW: 4300,
      platforms: [
        // carpeted paw-print ground, dotted with napping resident kitties
        {x:0,    y:430, w:520,  h:170, t:"pawground"},
        {x:650,  y:430, w:470,  h:170, t:"pawground"},
        {x:1260, y:430, w:500,  h:170, t:"pawground"},
        {x:1890, y:430, w:480,  h:170, t:"pawground"},
        {x:2520, y:430, w:500,  h:170, t:"pawground"},
        {x:3150, y:430, w:1150, h:170, t:"pawground"},   // long lawn up to Meow Manor
        // plump velvet cushions to hop on
        {x:290,  y:340, w:110, h:26, t:"cushion"},
        {x:760,  y:335, w:110, h:26, t:"cushion"},
        {x:1180, y:348, w:100, h:26, t:"cushion"},   // bridges the second bath
        {x:1400, y:330, w:120, h:26, t:"cushion"},
        {x:2010, y:340, w:110, h:26, t:"cushion"},
        {x:2420, y:348, w:100, h:26, t:"cushion"},   // bridges the fourth bath
        {x:2700, y:330, w:120, h:26, t:"cushion"},
        {x:3300, y:340, w:110, h:26, t:"cushion"},
        {x:3600, y:322, w:110, h:26, t:"cushion"},
      ],
      collectibles: [
        // balls of yarn floating above the cushions
        {x:345,  y:306, t:"yarn"},
        {x:815,  y:301, t:"yarn"},
        {x:1230, y:314, t:"yarn"},
        {x:1460, y:296, t:"yarn"},
        {x:2065, y:306, t:"yarn"},
        {x:2470, y:314, t:"yarn"},
        {x:2760, y:296, t:"yarn"},
        {x:3355, y:306, t:"yarn"},
        {x:3655, y:288, t:"yarn"},
        // mice (the candy-drop randomizer converts 1-2 of these)
        {x:430,  y:398, t:"mouse"},
        {x:1000, y:398, t:"mouse"},
        {x:1700, y:398, t:"mouse"},
        {x:2250, y:398, t:"mouse"},
        {x:3250, y:398, t:"mouse"},
        {x:3800, y:398, t:"mouse"},
        // fish (grow-ups — it is a cat island, after all)
        {x:180,  y:398, t:"fish"},
        {x:1550, y:398, t:"fish"},
        {x:2850, y:398, t:"fish"},
        {x:3990, y:398, t:"fish"},
      ],
      enemies: [
        {x:760,  min:670,  max:1010, vx:1.6},
        {x:1450, min:1280, max:1670, vx:1.7},
        {x:2050, min:1910, max:2280, vx:1.7},
        {x:2650, min:2540, max:2930, vx:1.8},
        {x:3400, min:3170, max:3700, vx:1.8},
        {x:3900, min:3780, max:4060, vx:1.6},
      ],
      // sudsy bath puddles between the lawns — every cat's nightmare
      hazards: [
        {x:520,  y:GROUND_Y+22, w:130, h:220},
        {x:1120, y:GROUND_Y+22, w:140, h:220},
        {x:1760, y:GROUND_Y+22, w:130, h:220},
        {x:2370, y:GROUND_Y+22, w:150, h:220},
        {x:3020, y:GROUND_Y+22, w:130, h:220},
      ],
      boss: null
    },
    // -------- WORLD 14: Meowtropolis — downtown at dusk, awnings and steamy manholes --------
    {
      name: "Meowtropolis Downtown", theme: "city",
      goalX: 4150, worldW: 4300,
      platforms: [
        // sidewalk blocks
        {x:0,    y:430, w:540,  h:170, t:"sidewalk"},
        {x:670,  y:430, w:450,  h:170, t:"sidewalk"},
        {x:1260, y:430, w:540,  h:170, t:"sidewalk"},
        {x:1930, y:430, w:440,  h:170, t:"sidewalk"},
        {x:2520, y:430, w:480,  h:170, t:"sidewalk"},
        {x:3130, y:430, w:1170, h:170, t:"sidewalk"},   // final block to the penthouse tower
        // shop awnings to bounce across
        {x:280,  y:340, w:110, h:26, t:"awning"},
        {x:770,  y:335, w:110, h:26, t:"awning"},
        {x:1150, y:348, w:100, h:26, t:"awning"},   // spans the second manhole
        {x:1420, y:330, w:120, h:26, t:"awning"},
        {x:2040, y:340, w:110, h:26, t:"awning"},
        {x:2420, y:348, w:100, h:26, t:"awning"},   // spans the fourth manhole
        {x:2720, y:330, w:120, h:26, t:"awning"},
        {x:3320, y:340, w:110, h:26, t:"awning"},
        {x:3620, y:322, w:110, h:26, t:"awning"},
      ],
      collectibles: [
        // fresh donuts above the awnings
        {x:335,  y:306, t:"donut"},
        {x:825,  y:301, t:"donut"},
        {x:1200, y:314, t:"donut"},
        {x:1480, y:296, t:"donut"},
        {x:2095, y:306, t:"donut"},
        {x:2470, y:314, t:"donut"},
        {x:2780, y:296, t:"donut"},
        {x:3375, y:306, t:"donut"},
        {x:3675, y:288, t:"donut"},
        {x:420,  y:398, t:"mouse"},
        {x:1010, y:398, t:"mouse"},
        {x:1690, y:398, t:"mouse"},
        {x:2230, y:398, t:"mouse"},
        {x:3230, y:398, t:"mouse"},
        {x:3810, y:398, t:"mouse"},
        {x:170,  y:398, t:"fish"},
        {x:1560, y:398, t:"fish"},
        {x:2860, y:398, t:"fish"},
        {x:3990, y:398, t:"fish"},
      ],
      enemies: [
        {x:780,  min:690,  max:1010, vx:1.6},
        {x:1450, min:1280, max:1710, vx:1.7},
        {x:2060, min:1950, max:2280, vx:1.7},
        {x:2650, min:2540, max:2910, vx:1.8},
        {x:3400, min:3150, max:3700, vx:1.8},
        {x:3900, min:3780, max:4060, vx:1.6},
      ],
      // open manholes venting steam between the sidewalk blocks
      hazards: [
        {x:540,  y:GROUND_Y+22, w:130, h:220},
        {x:1120, y:GROUND_Y+22, w:140, h:220},
        {x:1800, y:GROUND_Y+22, w:130, h:220},
        {x:2370, y:GROUND_Y+22, w:150, h:220},
        {x:3000, y:GROUND_Y+22, w:130, h:220},
      ],
      boss: null
    },
    // -------- WORLD 15: Wildcat Jungle — deep rainforest of the big cats --------
    {
      name: "Wildcat Jungle", theme: "jungle",
      goalX: 4150, worldW: 4300,
      platforms: [
        // mossy jungle floor
        {x:0,    y:430, w:500,  h:170, t:"junglefloor"},
        {x:640,  y:430, w:500,  h:170, t:"junglefloor"},
        {x:1270, y:430, w:460,  h:170, t:"junglefloor"},
        {x:1880, y:430, w:520,  h:170, t:"junglefloor"},
        {x:2530, y:430, w:470,  h:170, t:"junglefloor"},
        {x:3140, y:430, w:1160, h:170, t:"junglefloor"},   // final stretch to the temple
        // mossy branches through the canopy
        {x:270,  y:340, w:110, h:26, t:"branch"},
        {x:520,  y:350, w:100, h:26, t:"branch"},   // spans the first pond
        {x:750,  y:335, w:110, h:26, t:"branch"},
        {x:1755, y:348, w:100, h:26, t:"branch"},   // spans the wide third pond
        {x:1400, y:330, w:120, h:26, t:"branch"},
        {x:2000, y:340, w:110, h:26, t:"branch"},
        {x:2430, y:348, w:100, h:26, t:"branch"},   // spans the fourth pond
        {x:2700, y:330, w:120, h:26, t:"branch"},
        {x:3020, y:350, w:100, h:26, t:"branch"},   // spans the last pond
        {x:3310, y:340, w:110, h:26, t:"branch"},
        {x:3610, y:322, w:110, h:26, t:"branch"},
      ],
      collectibles: [
        // ripe mangos hanging in the canopy
        {x:325,  y:306, t:"mango"},
        {x:805,  y:301, t:"mango"},
        {x:1805, y:314, t:"mango"},
        {x:1460, y:296, t:"mango"},
        {x:2055, y:306, t:"mango"},
        {x:2480, y:314, t:"mango"},
        {x:2760, y:296, t:"mango"},
        {x:3365, y:306, t:"mango"},
        {x:3665, y:288, t:"mango"},
        {x:430,  y:398, t:"mouse"},
        {x:1000, y:398, t:"mouse"},
        {x:1660, y:398, t:"mouse"},
        {x:2260, y:398, t:"mouse"},
        {x:3240, y:398, t:"mouse"},
        {x:3820, y:398, t:"mouse"},
        {x:180,  y:398, t:"fish"},
        {x:1540, y:398, t:"fish"},
        {x:2870, y:398, t:"fish"},
        {x:3980, y:398, t:"fish"},
      ],
      enemies: [
        {x:760,  min:660,  max:1030, vx:1.6},
        {x:1440, min:1290, max:1680, vx:1.7},
        {x:2050, min:1900, max:2310, vx:1.7},
        {x:2650, min:2550, max:2910, vx:1.8},
        {x:3400, min:3160, max:3700, vx:1.8},
        {x:3900, min:3780, max:4060, vx:1.6},
      ],
      // murky piranha ponds between the clearings
      hazards: [
        {x:500,  y:GROUND_Y+22, w:140, h:220},
        {x:1140, y:GROUND_Y+22, w:130, h:220},
        {x:1730, y:GROUND_Y+22, w:150, h:220},
        {x:2400, y:GROUND_Y+22, w:130, h:220},
        {x:3000, y:GROUND_Y+22, w:140, h:220},
      ],
      boss: null
    },
    // -------- WORLD 16: Super Meow World — bricks, pipes, mystery boxes, Koopa King --------
    {
      name: "Super Meow World", theme: "mushroom",
      goalX: 4260, worldW: 4400,
      platforms: [
        // classic block ground with open pits between the segments
        {x:0,    y:430, w:1080, h:170, t:"marioground"},
        {x:1170, y:430, w:1030, h:170, t:"marioground"},
        {x:2300, y:430, w:860,  h:170, t:"marioground"},
        {x:3270, y:430, w:1130, h:170, t:"marioground"},
        // warp pipes (grounded — never lifted)
        {x:520,  y:380, w:56, h:50, t:"pipe"},
        {x:860,  y:366, w:56, h:64, t:"pipe"},
        {x:1560, y:380, w:56, h:50, t:"pipe"},
        {x:2700, y:366, w:56, h:64, t:"pipe"},
        // brick + mystery box rows
        {x:300,  y:330, w:26, h:26, t:"brick"},
        {x:326,  y:330, w:26, h:26, t:"qbox"},
        {x:352,  y:330, w:26, h:26, t:"brick"},
        {x:378,  y:330, w:26, h:26, t:"qbox"},
        {x:404,  y:330, w:26, h:26, t:"brick"},
        {x:1300, y:330, w:26, h:26, t:"qbox"},
        {x:1326, y:330, w:26, h:26, t:"brick"},
        {x:1352, y:330, w:26, h:26, t:"qbox"},
        {x:1650, y:330, w:78, h:26, t:"brick"},
        {x:1676, y:250, w:26, h:26, t:"qbox"},   // high box above the brick shelf
        {x:2450, y:330, w:26, h:26, t:"brick"},
        {x:2476, y:330, w:26, h:26, t:"qbox"},
        {x:2502, y:330, w:26, h:26, t:"brick"},
        {x:3350, y:330, w:26, h:26, t:"qbox"},
        // staircase up to the flagpole
        {x:3900, y:404, w:26, h:26, t:"brick"},
        {x:3926, y:378, w:26, h:52, t:"brick"},
        {x:3952, y:352, w:26, h:78, t:"brick"},
      ],
      collectibles: [
        // coins — over the box rows, in pit arcs, and in ground runs
        {x:313,  y:296, t:"coin"},
        {x:391,  y:296, t:"coin"},
        {x:1313, y:296, t:"coin"},
        {x:1365, y:296, t:"coin"},
        {x:1689, y:216, t:"coin"},
        {x:2463, y:296, t:"coin"},
        {x:2515, y:296, t:"coin"},
        {x:650,  y:398, t:"coin"},
        {x:700,  y:398, t:"coin"},
        {x:750,  y:398, t:"coin"},
        {x:1900, y:398, t:"coin"},
        {x:1950, y:398, t:"coin"},
        {x:2900, y:398, t:"coin"},
        {x:2950, y:398, t:"coin"},
        {x:3500, y:398, t:"coin"},
        {x:1120, y:340, t:"coin"},
        {x:2250, y:340, t:"coin"},
        {x:3215, y:340, t:"coin"},
        // fish grow-ups (no mice here: power-ups come from the mystery boxes)
        {x:180,  y:398, t:"fish"},
        {x:2000, y:398, t:"fish"},
        {x:3050, y:398, t:"fish"},
      ],
      enemies: [
        {x:640,  min:600,  max:820,  vx:1.5},
        {x:1450, min:1250, max:1520, vx:1.6},
        {x:1800, min:1700, max:2150, vx:1.7},
        {x:2500, min:2380, max:2650, vx:1.6},
        {x:2950, min:2790, max:3100, vx:1.8},
        {x:3450, min:3330, max:3700, vx:1.6},
      ],
      hazards: [],
      boss: { x:3600, w:110, h:92, hp:3, vx:1.8, min:3300, max:3840, name:"Koopa King" }
    }
  ];
