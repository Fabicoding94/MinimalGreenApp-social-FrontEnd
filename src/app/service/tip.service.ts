import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tip} from '../models/tip'


@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:8080/api/tips'

  /* getAllTips():Observable<Tip[]>{         //to get all tips
    return this.http.get<Tip[]>(this.apiUrl)
  }*/

  getAllSaveWaterTips():Observable<any>{
    return this.http.get(this.apiUrl+"/tipType/SAVE_WATER")
  }

  getAllSaveElectricityTips():Observable<any>{ //I use any to not have errors
    return this.http.get(this.apiUrl+"/tipType/SAVE_ELECTRICITY")
  }

  getAllRecuceCO2Tips():Observable<any>{
    return this.http.get(this.apiUrl+"/tipType/REDUCE_CO2")
  }

  getAllSustDietTips():Observable<any>{
    return this.http.get(this.apiUrl+"/tipType/SUSTAINABLE_DIET")
  }
/*
  getAllPostsByAuthorId(id:number):Observable<Tip[]>{
    return this.http.get<Tip[]>(this.apiUrl+"/author/"+id)
  }

  addPost(post: FormData):Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post)
  }

  editPost(post:Post):Observable<Post>{
    return this.http.patch<Post>(this.apiUrl + '/' + post.id, post)
  }

  deletePost(post:Post):Observable<Post>{
    return this.http.delete<Post>(this.apiUrl + '/' + post.id)
  }*/
}
