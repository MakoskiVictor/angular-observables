import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models';
import { FovouritesService } from 'src/app/services';

@Component({
  selector: 'app-view-selected-cards',
  templateUrl: './view-selected-cards.component.html',
  styleUrls: ['./view-selected-cards.component.scss']
})
export class ViewSelectedCardsComponent {
  favourites$: Observable<Character[]>

  constructor(private favourites: FovouritesService) {
    this.favourites$ = favourites.getFavouriteObservable
  }

  quitFavourite(data: Character) {
    this.favourites.quitFavouriteObservable(data)
  }
}
