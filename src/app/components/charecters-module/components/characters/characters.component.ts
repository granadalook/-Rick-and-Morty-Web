import { Component, OnInit } from '@angular/core';
import { Result, Rickandmorty } from 'src/app/models/characters.model';
import { ChatactersService } from 'src/app/core/services/chatacters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters?: Array<Result>;

  constructor(private chatactersService: ChatactersService) {}

  ngOnInit(): void {}

  allCharacters() {
    this.chatactersService.get().subscribe((respuesta) => {
      this.characters = respuesta.results;
      console.log('respuesta', respuesta.results);
    });
  }
}
