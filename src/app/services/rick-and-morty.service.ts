import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Character, DataReceived } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private httpCLient: HttpClient) { }

  get charactersListFromApi(): Observable<Character[]> {
    return this.httpCLient.get<DataReceived>('https://rickandmortyapi.com/api/character')
      .pipe(map(response => response.results))
  }
}
