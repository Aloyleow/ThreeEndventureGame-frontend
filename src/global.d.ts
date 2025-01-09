declare global {

  type CharSelectedType = {
    image: string,
    alt: string,
    role: string,
    items: string[] | undefined,
    skills: string[] | undefined,
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