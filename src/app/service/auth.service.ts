import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

type ILogin = {
  username: string,
  password: string
}

 type IRegister = {
  name:string,
  surname:string,
  username:string,
  email: string,
  password: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:8080'

  register(registerData:IRegister):Observable<User>{
    return this.http.post<User>(this.apiUrl+'/api/users/register', registerData)
  }

  login(loginData:ILogin):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrl+'/auth/login', loginData)
  }

  isUserLogged():boolean{
    return localStorage.getItem('access') != null
  }

  getAccessData():AuthResponse{
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db) : null
  }

  getAccessToken():string{
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db).accessToken : null
  }

  saveAccessData(data:AuthResponse){
    localStorage.setItem('access',JSON.stringify(data))
  }

  logOut():void{
    localStorage.removeItem('access')
  }
}
