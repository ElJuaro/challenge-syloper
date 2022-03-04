import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  movieObservable$: any = new Observable();
  
  constructor(private _movieService : MoviesService, private router:Router) { 
    this.movieObservable$= _movieService.getMovies();
  }

  ngOnInit(): void {
  }

  mandarId(id:any){
    this.router.navigate(['movie', id])
  }
 

}
