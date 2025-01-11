type PlayerRoles = {
  image: string;
  alt: string;
  role: string;
  items: string[];
  skills: string[];
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
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
    maxHealth: 100,
    mana: 0,
    maxMana: 0,
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
    maxHealth: 50,
    mana: 50,
    maxMana: 50,
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
    maxHealth: 30,
    mana: 0,
    maxMana: 0,
    gold: 80,
    attack: 1,
    turns: 0,
    active: true,
    win: false,
  }
];

type NPC = {
  role: string;
  health: number;
  attack: number;
}[];

export const npc: NPC = [
  {
    role: "Trader",
    health: 30,
    attack: 888
  },
  {
    role: "Santa Clause",
    health: 30,
    attack: 8888
  },
  {
    role: "Slime",
    health: 20,
    attack: 8
  },
  {
    role: "Skeleton",
    health: 10,
    attack: 12
  },
  {
    role: "Zombie",
    health: 30,
    attack: 4
  },
  {
    role: "Dragon",
    health: 100,
    attack: 30,
  }
]