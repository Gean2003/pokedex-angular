import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInfo } from 'src/app/interfaces/pokemon.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(pokemon: PokemonInfo[], page: number = 0, search: string = ''): PokemonInfo[] {
    if(search.length === 0) return pokemon.slice(page, page + 5)

    const filterPokemons = pokemon.filter( p => p.name.includes(search))

    return filterPokemons.slice(page, page + 5)
  }

}
