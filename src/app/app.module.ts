import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [ //TODO: pueden ser, Declaraciones, componentes, directivas y pipes
    AppComponent, FavoritesPageComponent
  ],
  imports: [ //TODO: solo se importan otros modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
