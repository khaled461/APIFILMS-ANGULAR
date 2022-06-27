import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient ) { 
  }
   
  getTrendingAll(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=a0b07487c1f05da14e3e3d7286531df5&page="+pageNumber );
  }
  
  
  getTrendingMovie():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a0b07487c1f05da14e3e3d7286531df5");
  }
  
  
  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=a0b07487c1f05da14e3e3d7286531df5");
  }
  
  getTrendingPerson():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=a0b07487c1f05da14e3e3d7286531df5");
  }
  
  
}
