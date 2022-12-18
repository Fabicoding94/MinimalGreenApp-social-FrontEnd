import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Comment} from '../models/comment'
import { Post} from '../models/post'


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:8080/api/comments'

  getAllComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl)
  }

  getAllCommentsByPostId(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl+"/post_id/"+ postId)
  }

 /* addPost(comment: FormData):Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl, post)
  }

  editPost(comment:Comment):Observable<Comment>{
    return this.http.patch<Comment>(this.apiUrl + '/' + post.id, post)
  }

  deletePost(comment:Comment):Observable<Comment>{
    return this.http.delete<Comment>(this.apiUrl + '/' + post.id)
  }*/
}
