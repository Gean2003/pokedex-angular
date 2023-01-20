import { Component, OnInit } from '@angular/core';
import { Count, PokemonDetails, PokemonInfo } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent implements OnInit {
  public pokemonDetails: PokemonInfo[] = []
  public inputFilter: string = ''
  public page: number = 0
  public text: string = ''
  public autoCompleteName: PokemonInfo[] = []
  public containListName: boolean = false
  public pokemonInfo: PokemonDetails[] = []
  public search: string = ''
  public showCardInfo: boolean = false
  public obj: any = {}
  public Object = Object

  constructor(private _pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this._pokemonServices.getAllPokemons().subscribe(data => {
      this.getCountOfPokemons(data)
      this.pokemonDetails = data
    })
  }

  handleInput(_event: Event): void {
    const filter = this.pokemonDetails.filter(pokemon => pokemon.name.includes(this.text))
    this.autoCompleteName = filter
    this.containListName = true
  }

  searchPokemon(): void {
    if (this.text == '') { this.page = 0 }
    this.search = this.text
  }

  getName(event: Event) {
    this.page = 0
    this.text = (<HTMLParagraphElement>event.target).innerText
    this.containListName = false
  }

  nextPage() {
    this.page += 5
  }

  previousPage() {
    if (this.page > 0)
      this.page -= 5
  }

  getDetailPokemon(event: Event) {
    this.pokemonInfo = []
    const name = (<HTMLParagraphElement>event.target).innerText
    this._pokemonServices.getPokemonDetails(name).subscribe(data => {
      this.pokemonInfo.push(data)
    })

    this.showCardInfo = true
  }

  handleShowCard() {
    this.showCardInfo = false
  }

  getCountOfPokemons(data: PokemonInfo[]) {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let count: number = 0

    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].name[0] == alphabet[i]) {
          count++
          this.obj[alphabet[i]] = count
        }
      }
      count = 0
    }
  }

}
