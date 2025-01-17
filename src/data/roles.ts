type PlayerRoles = {
  image: string;
  alt: string;
  role: string;
  pathtaken: string[];
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
    pathtaken: [],
    items: [],
    skills: [],
    health: 100,
    maxhealth: 100,
    mana: 0,
    maxmana: 0,
    gold: 20,
    attack: 4,
    turns: 0,
    active: true,
    win: false,
  },
  {
    image: "/wand.svg",
    alt: "wandIcon",
    role: "Mage",
    pathtaken: [],
    items: [],
    skills: [],
    health: 50,
    maxhealth: 50,
    mana: 50,
    maxmana: 50,
    gold: 20,
    attack: 6,
    turns: 0,
    active: true,
    win: false,

  },
  {
    image: "/keyboard.svg",
    alt: "keyboardIcon",
    role: "Human",
    pathtaken: [],
    items: [],
    skills: [],
    health: 30,
    maxhealth: 30,
    mana: 0,
    maxmana: 0,
    gold: 80,
    attack: 12,
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

