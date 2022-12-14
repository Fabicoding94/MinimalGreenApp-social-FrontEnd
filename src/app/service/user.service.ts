import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserUpdate } from '../models/userUpdate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  editProfilePic(id:number, userPic: FormData) {
    return this.http.put<User>(this.apiUrl+"/"+id+"/updateProfilePic", userPic)
  }

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:8080/api/users'

  getUserById(id:string):Observable<User>{
    return this.http.get<User>(this.apiUrl + '/' + id)
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

 // non serve un post in questo caso: equivale al register in authService

  editUser(user:UserUpdate):Observable<User>{
    console.log(user)
    return this.http.put<User>(this.apiUrl + '/' + user.id, user)
  }

  deleteUser(user:User){
    return this.http.delete<User>(this.apiUrl + '/' + user.id)
  }

}
