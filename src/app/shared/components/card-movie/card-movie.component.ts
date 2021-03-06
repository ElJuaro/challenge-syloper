import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
})
export class CardMovieComponent{

  public movieData : any;
  public movieActors: any;
  public cardActors !: boolean;
  
  constructor(private activeRouter: ActivatedRoute, private movieService: MoviesService) {
    let movieId = this.activeRouter.snapshot.paramMap.get('id')
    movieService.getMovieId(movieId).pipe(
      mergeMap((movieData:any) => {
        this.movieData = movieData;
        this.cardActors = true;
        return this.movieService.getCreditsCast(movieId);
      }) 
    ).subscribe((movieActors) => {
      this.movieActors = movieActors.filter((result) => result.profile_path != null);
    }); 
   }
}
