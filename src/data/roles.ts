type PlayerRoles = {
  image: string;
  alt: string;
  role: string;
  items: string[];
  skills: string[];
  health: number;
  maxhealth: number;
  mana: number;
  maxmana: number;
  gold: number;
  attack: number;
  turns: number;
  active: boolean;
  win: boolean
}[];

export const playerRoles: PlayerRoles = [
  {
    image: "/sword.svg",
    alt: "swordIcon",
    role: "Knight",
    items: [],
    skills: [],
    health: 100,
    maxhealth: 100,
    mana: 0,
    maxmana: 0,
    gold: 20,
    attack: 3,
    turns: 0,
    active: true,
    win: false,
  },
  {
    image: "/wand.svg",
    alt: "wandIcon",
    role: "Mage",
    items: [],
    skills: [],
    health: 50,
    maxhealth: 50,
    mana: 50,
    maxmana: 50,
    gold: 20,
    attack: 5,
    turns: 0,
    active: true,
    win: false,

  },
  {
    image: "/keyboard.svg",
    alt: "keyboardIcon",
    role: "Human",
    items: [],
    skills: [],
    health: 30,
    maxhealth: 30,
    mana: 0,
    maxmana: 0,
    gold: 80,
    attack: 1,
    turns: 0,
    active: true,
    win: false,
  }
];

// type gamePath = {
//   role: string;
//   health: number;
//   attack: number;
// }[];

// export const npc: NPC = [
//   {
//     role: "Trader",
//     health: 30,
//     attack: 888
//   },
//   {
//     role: "Santa Clause",
//     health: 30,
//     attack: 8888
//   },
//   {
//     role: "Slime",
//     health: 20,
//     attack: 8
//   },
//   {
//     role: "Skeleton",
//     health: 10,
//     attack: 12
//   },
//   {
//     role: "Zombie",
//     health: 30,
//     attack: 4
//   },
//   {
//     role: "Dragon",
//     health: 100,
//     attack: 30,
//   }
// ]

const gamePath = [
  {
    pathId: 1,
    pathName: "Forest", 
    encounter: {
      enemy: true,
      name: "Slime",
      health: 10,
      attack: 12,
      gold: 5,
    },
  },
  {
    pathId: 2,
    pathName: "Shed", 
    encounter: {
      enemy: true,
      name: "Zombie",
      health: 30,
      attack: 4,
      gold: 5,
    },
  },
  {
    pathId: 3,
    pathName: "Ruins", 
    encounter: {
      enemy: true,
      name: "Skeleton",
      health: 10,
      attack: 12,
      gold: 5,
    },
  },
  {
    pathId: 4,
    pathName: "River", 
    encounter: {
      enemy: true,
      name: "20kg Cockroach",
      health: 100,
      attack: 2,
      gold: 15,
    },
  },
  {
    pathId: 5,
    pathName: "Cave", 
    encounter: {
      enemy: true,
      name: "Glowing Bear",
      health: 60,
      attack: 12,
      gold: 15,
    },
  },
  {
    pathId: 6,
    pathName: "Temple", 
    encounter: {
      enemy: true,
      name: "Dragon",
      health: 80,
      attack: 18,
      gold: 30,
    },
  },
  {
    pathId: 7,
    pathName: "Mountain", 
    encounter: {
      enemy: true,
      name: "Unknown",
      health: 150,
      attack: 30,
      gold: 0,
    },
  }
]