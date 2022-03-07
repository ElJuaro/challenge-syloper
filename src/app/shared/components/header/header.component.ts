import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public search !: string;
  @Output() searchOn : any = new EventEmitter<boolean>();
  
  constructor(private movieService: MoviesService) { 
  }

  ngOnInit(): void {
  }

  buscar(value : boolean){
    this.searchOn.emit(value)
    this.movieService.getSearchMovie(this.search).subscribe((data) => {
      this.movieService.setMovies(data);
    })
  }
}
