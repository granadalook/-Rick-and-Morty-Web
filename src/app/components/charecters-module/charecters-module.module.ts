import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharectersModuleRoutingModule } from './charecters-module-routing.module';
import { CharactersComponent } from './components/characters/characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharectersModuleRoutingModule
  ],
  exports:[CharactersComponent]
})
export class CharectersModuleModule { }
