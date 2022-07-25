import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(moviesType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${moviesType}/day?api_key=cb9d54251bfb16d22a9165b924cf3c91`)
  }

  getMoviesDetailsTrending(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cb9d54251bfb16d22a9165b924cf3c91&language=en-US`)
  }
  getTvDetailsTrending(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=cb9d54251bfb16d22a9165b924cf3c91&language=en-US`)
  }

  getMoviesBypage(pageNum:number):Observable<any>{
    return this._HttpClient.get( `https://api.themoviedb.org/3/movie/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNum}`)
  }

  getTvBypage(pageNum:number):Observable<any>{
    return this._HttpClient.get( `https://api.themoviedb.org/3/tv/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNum}`)
  }
  
}
