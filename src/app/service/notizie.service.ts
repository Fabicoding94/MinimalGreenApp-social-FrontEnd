import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';





@Injectable({
  providedIn: 'root'
})
export class NotizieService {

  constructor(private http: HttpClient) { }

  apiUrl= 'https://newsapi.org/v2/everything?q=climatechange&apiKey=e3725e3f0ef04c3c9dd439de8cebd199'

  getAllNotizie():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
