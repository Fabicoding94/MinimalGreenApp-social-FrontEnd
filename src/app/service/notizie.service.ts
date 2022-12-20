import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Notizia } from '../models/notizia';
import { Post} from '../models/post'
import { PostDto } from '../models/postDTO';




@Injectable({
  providedIn: 'root'
})
export class NotizieService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'https://newsapi.org/v2/everything?q=savetheplanet&apiKey=e3725e3f0ef04c3c9dd439de8cebd199'

  getAllNotizie():Observable<Notizia[]>{
    return this.http.get<Notizia[]>(this.apiUrl)
  }
}
