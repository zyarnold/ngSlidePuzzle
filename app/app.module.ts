import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickDirectiveDirective } from './click-directive.directive';
import { NgSlidePuzzleComponent } from './ng-slide-puzzle/ng-slide-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickDirectiveDirective,
    NgSlidePuzzleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
