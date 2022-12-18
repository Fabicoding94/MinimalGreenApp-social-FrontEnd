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

  isUserLogged():boolean{//ritorna true se l'utente è loggato
    return localStorage.getItem('access') != null
  }

  getLoggedUser(){ //prende i dati dello user che ha fatto login, se c'è nel localstorage
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db).user : null
  }

  getAccessToken():string{//prende il token d'accesso
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db).accessToken : null
  }

  saveAccessData(data:AuthResponse){
    localStorage.setItem('access',JSON.stringify(data))
  }

  getAccessData():AuthResponse{
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db) : null
  }

  logOut():void{//rimuove dal localstorage l'accesso
    localStorage.removeItem('access')
  }
}
