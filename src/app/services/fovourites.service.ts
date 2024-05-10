import { Injectable } from '@angular/core';
import { Character } from '../models';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FovouritesService {

  constructor() { }
  // Inicializo mi observable que contiene los datos
  private favourites: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([])
  //private currentFavourites: Character[] = []

  get getFavouriteObservable ():Observable<Character[]> {
    return this.favourites.asObservable()
  }

  setFavouriteObservable(data: Character) {
    const currentFavourites = this.favourites.getValue()
    const existFavourite = currentFavourites.some(character => character.id === data.id)
    if(!existFavourite){
      currentFavourites.push(data)
      this.favourites.next(currentFavourites)
    }
  }

  quitFavouriteObservable(data: Character) {
    const currentFavourites = this.favourites.getValue()
    const newFavourites = currentFavourites.filter(character => character.id != data.id)
    this.favourites.next(newFavourites)
  }

}
