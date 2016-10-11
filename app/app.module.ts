import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {routing} from "./app.router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
