import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rickandmorty } from 'src/app/models/characters.model';


@Injectable({
  providedIn: 'root'
})
export class ChatactersService {

  constructor( private http: HttpClient) { }
  get(){
     return this.http.get<Rickandmorty>(
       `${environment.urlApi}${environment.allCharacters}`
    )
  }
}
