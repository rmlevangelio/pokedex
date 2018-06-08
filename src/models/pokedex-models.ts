
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
  moves: object[];
}

export class Pokemon {
  public id: number;
  public name: string;
  public weight: number;
  public height: number;
  public moves: object[];
  
  constructor(rawPokemon: RawPokemon) {
    const { id, name, weight, height, moves } = rawPokemon;

    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.moves = moves;
  }
}
