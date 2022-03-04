import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieApiResult } from 'src/app/models/movie-item.metadata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

   movies$: any = new Observable();

   
  constructor(public moviesService : MoviesService) { 
    this.movies$ = moviesService.getMovies;
    /* moviesService.getAllMovies().subscribe(result => moviesService.setAllMovies(result)) */
  }



  ngOnInit(): void {
  }

}
