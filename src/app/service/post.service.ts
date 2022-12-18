import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post} from '../models/post'
import { PostDto } from '../models/postDTO';


type authorId ={
  authorId:number
}

type IPost = {

  title:string;
  text:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:8080/api/posts'

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl)
  }

  getAllPostsByAuthorId(id:number):Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+"/author/"+id)
  }

  addPost(post: PostDto, authorId:number):Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post)
  }

  editPost(post:Post):Observable<Post>{
    return this.http.patch<Post>(this.apiUrl + '/' + post.id, post)
  }

  deletePost(post:Post):Observable<Post>{
    return this.http.delete<Post>(this.apiUrl + '/' + post.id)
  }
}
