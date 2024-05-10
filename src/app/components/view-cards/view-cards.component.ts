import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models';
import { FovouritesService, RickAndMortyService } from 'src/app/services';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.scss']
})
export class ViewCardsComponent {

  characters$: Observable<Character[]>

  favourites$: Character[] = []

  constructor(rickANdMortyService: RickAndMortyService, private favourites: FovouritesService) {
    this.characters$ = rickANdMortyService.charactersListFromApi
    this.favourites.getFavouriteObservable.subscribe(favourites => {
      this.favourites$ = favourites
    })
  }

  setFavourite(data: Character) {
    this.favourites.setFavouriteObservable(data)
  }

  quitFavourite(character: Character) {
    this.favourites.quitFavouriteObservable(character)
  }

  isFavourite(character: Character) {
    return this.favourites$.some(favourite => favourite.id === character.id)
  }


}
