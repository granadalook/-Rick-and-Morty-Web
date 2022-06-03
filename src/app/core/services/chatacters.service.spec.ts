import { TestBed } from '@angular/core/testing';

import { ChatactersService } from './chatacters.service';

describe('ChatactersService', () => {
  let service: ChatactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
