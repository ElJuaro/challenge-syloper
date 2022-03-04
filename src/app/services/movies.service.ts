import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IMovieApi, IMovieApiResult } from '../models/movie-item.metadata';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  observable$ = new BehaviorSubject<IMovieApiResult[]>([]);

  private API_KEY = 'api_key=bf4cbc9da8a46c3a1eb9bfafb62bc3fb';
  private BASE_URL = 'https://api.themoviedb.org/3';
  private API_URL = this.BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + this.API_KEY;


  private searchURL = this.BASE_URL +'/search/movie?' + this.API_KEY;

  constructor(private http: HttpClient) { }

  getAllMovies() : Observable<IMovieApiResult[]>{
    return this.http.get<IMovieApi>(this.API_URL)
    .pipe(map((apiResult) => apiResult.results))
  }

  getMovieId(id:any) : Observable<IMovieApiResult>{
    return this.http.get<IMovieApiResult>(this.BASE_URL+ '/movie/' + id + 'videos?'+ this.API_KEY)
  }


  getMovies(): Observable<IMovieApiResult[]>{
    return this.observable$.asObservable();
  }

  setMovies(movies: IMovieApiResult[]): void{
    this.observable$.next(movies);
  }



}