import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetails, PokemonInfo, PokemonResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<PokemonInfo[]> {
    return this.http.get<PokemonResponse>(`${this.url}/pokemon?limit=9999`)
      .pipe(map(this.pokemonsInfo))
  }

  private pokemonsInfo(resp: PokemonResponse): PokemonInfo[] {
    const listPokemon: PokemonInfo[] = resp.results.map(data => {

      const aux = data.url.split('/')
      const id = aux[6]
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

      return {
        id,
        image,
        name: data.name
      }
    })

    return listPokemon
  }

  getPokemonDetails(name: string) {
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}