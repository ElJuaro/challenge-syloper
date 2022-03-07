import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public search !: string;
  public hidden !: boolean
  constructor(private movieService: MoviesService) { 
  }

  ngOnInit(): void {
  }

  buscar(){
    this.movieService.getSearchMovie(this.search).subscribe((data) => {
      this.movieService.setMovies(data);
    })
  }
}
