import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit{

   public movies : any
   public valueSearch !: any
   public hiden !: boolean

  constructor(public _moviesService : MoviesService) { 
    _moviesService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }


  ngAfterViewInit(): void {
    this._moviesService.getBoolean().subscribe((result) => {
      this.hiden = result;
    })
  }

  searching(value:boolean){
    this.valueSearch = value;
  }
}
