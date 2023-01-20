export interface PokemonResponse {
    count: number,
    next: number,
    previous: number,
    results: Result[]
}

export interface Result {
    name: string,
    url: string
} 

export interface PokemonInfo {
    id:string,
    name: string,
    image: string
}

//TODO: interface para el detallado del Pokemon

export interface PokemonDetails {
    abilities:                Ability[];
    base_experience:          number;
    height:                   number;
    moves:                    Move[];
    name:                     string;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   Species;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Move {
    move:   Species;
}

export interface Sprites {
    front_default: string;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}

//TODO: interface contador de pokemones

/*export interface ObjAlphabet {
    a:number,
    b:number,
    c:number,
    d:number,
    e:number,
    f:number,
    g:number,
    h:number,
    i:number,
    j:number,
    k:number,
    l:number,
    m:number,
    n:number,
    o:number,
    p:number,
    q:number,
    r:number,
    s:number,
    t:number,
    u:number,
    v:number,
    w:number,
    x:number,
    y:number,
    z:number
}[]*/

export interface Count{
    alphabet: string[]
    countPokemons: number[]
}