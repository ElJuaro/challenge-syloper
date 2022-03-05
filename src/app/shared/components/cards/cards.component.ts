import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IMovieApiResult } from 'src/app/models/movie-item.metadata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent{

  
  @Input() movies !: any;
  constructor(private router:Router) { }
  
  mandarId(id:any){
    this.router.navigate(['movie', id])
  }
 
}
