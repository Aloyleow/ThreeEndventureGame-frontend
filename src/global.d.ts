declare global {

  type PlayerType = {
    image: string,
    alt: string,
    role: string,
    items: string[],
    skills: string[],
    health: number,
    mana: number,
    gold: number,
    attack: number, 
    turns: number, 
    active: boolean,
    win: boolean, 
  };

}

export {};