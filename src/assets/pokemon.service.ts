import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _Pokemons: Pokemon[] = [
    new Pokemon(
      '1',
      'Bulbasaur',
      'Grass',
      '../assets/sprites/1.png',
      '../assets/images/1.png'
    ),
    new Pokemon(
      '2',
      'Charmander',
      'Fire',
      '../assets/sprites/4.png',
      '../assets/images/4.png'
    ),
    new Pokemon(
      '3',
      'Squirtle',
      'Water',
      '../assets/sprites/7.png',
      '../assets/images/7.png'
    ),
    new Pokemon(
      '4',
      'Chikorita',
      'Grass',
      '../assets/sprites/152.png',
      '../assets/images/152.png'
    ),
    new Pokemon(
      '5',
      'Cyndaquil',
      'Fire',
      '../assets/sprites/155.png',
      '../assets/images/155.png'
    ),
    new Pokemon(
      '6',
      'Totodile',
      'Water',
      '../assets/sprites/158.png',
      '../assets/images/158.png'
    ),
    new Pokemon(
      '7',
      'Treecko',
      'Grass',
      '../assets/sprites/252.png',
      '../assets/images/252.png'
    ),
    new Pokemon(
      '8',
      'Torchic',
      'Fire',
      '../assets/sprites/255.png',
      '../assets/images/255.png'
    ),
    new Pokemon(
      '9',
      'Mudkip',
      'Water',
      '../assets/sprites/258.png',
      '../assets/images/258.png'
    ),
    new Pokemon(
      '10',
      'Turtwig',
      'Grass',
      '../assets/sprites/387.png',
      '../assets/images/387.png'
    ),
    new Pokemon(
      '11',
      'Chimchar',
      'Fire',
      '../assets/sprites/390.png',
      '../assets/images/390.png'
    ),
    new Pokemon(
      '12',
      'Piplup',
      'Water',
      '../assets/sprites/393.png',
      '../assets/images/393.png'
    )
  ];
  constructor() { }
}
