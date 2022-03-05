import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieApiResult } from 'src/app/models/movie-item.metadata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{

   movieObservable$: any = new Observable();
   public movies : any

  constructor(public _moviesService : MoviesService) { 
    this.movieObservable$= _moviesService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
