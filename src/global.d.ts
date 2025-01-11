declare global {

  type PlayerType = {
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
  };

  type ItemsInInventory = {
    name: string;
    cost: number;
    description: string;
  }[];

}

export { };