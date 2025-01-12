declare global {

  type PlayerType = {
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
  };

  type ItemsInInventory = {
    name: string;
    cost: number;
    description: string;
  }[];

}

export { };