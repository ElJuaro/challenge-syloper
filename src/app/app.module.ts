import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LazyComponent } from './lazyload/lazy/lazy.component';
import { CardMovieComponent, CardsComponent, CarouselComponent, FooterComponent, HeaderComponent, HomeComponent } from './shared/components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './shared/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    CardsComponent,
    CardMovieComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
