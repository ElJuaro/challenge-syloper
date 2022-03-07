import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovieApiResult } from 'src/app/models/movie-item.metadata';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {

    movies$: Observable<IMovieApiResult[]>

  constructor( private _movieService : MoviesService, private _config: NgbCarouselConfig) { 
    _config.pauseOnHover = true;
    this.movies$= _movieService.getAllMovies();
    this.movies$.subscribe(result => {
     _movieService.setMovies(result)
    });
  }
}
