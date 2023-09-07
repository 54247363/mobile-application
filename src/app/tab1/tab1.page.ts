import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/assets/pokemon.model';
import { PokemonService } from 'src/assets/pokemon.service';
//import { Pokemon } from './Pokemon.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  loadedPokemon: Pokemon[];
  constructor (private pokemonService: PokemonService) {}
  ngOnInit () {
    // this.loadedPokemon = this.pokemonService.pokemon
  }
}
