
export interface Result {
  url: string;
  name: string;
}

export interface FetchResultState {
  results: Result[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface RawPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: any;
  types: any;
}

export class Pokemon {
  public id: number;
  public name: string;
  public weight: number;
  public height: number;
  public image: string;
  public type: string;
  
  constructor(rawPokemon: RawPokemon) {
    const { id, name, weight, height, sprites, types  } = rawPokemon;

    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.image = sprites.front_default;
    this.type = types[0].type.name;
  }
}
