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

  type SelectedPath = {
    pathId: number;
    pathName: string;
    encounter: {
      enemy: boolean;
      name: string;
      health: number;
      attack: number;
      gold: number;
    }
  };

  type ItemsResponse = {
    numPath: number;
    name: string;
    role: string;
    cost: number;
    description: string;
    properties: {
      attack: number;
      health: number;
      mana: number;
      maxhealth: number;
      maxmana: number;
    }
  }[];

}

export { };