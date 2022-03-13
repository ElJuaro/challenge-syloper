import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovieApi, IMovieApiResult } from 'src/app/models/movie-item.metadata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent{

  public search: IMovieApiResult[] = [];
  @Output() searchOn : any = new EventEmitter<boolean>();

  constructor(private movieService: MoviesService) {
  }

  buscar(value : boolean){
    this.searchOn.emit(value)
    this.movieService.setBoolean(value);
    this.movieService.getSearchMovie(this.search).subscribe((data) => {
      this.movieService.setMovies(data);
    })
  }
}