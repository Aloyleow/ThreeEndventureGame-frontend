declare global {

  type PlayerType = {
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
  };

  type GamePath = {
    pathId: number;
    pathName: string;
    encounter: {
      enemy: boolean;
      name: string;
      health: number;
      attack: number;
      gold: number;
    }
  }[]

  type ItemsInInventory = {
    name: string;
    cost: number;
    description: string;
  }[];

}

export { };