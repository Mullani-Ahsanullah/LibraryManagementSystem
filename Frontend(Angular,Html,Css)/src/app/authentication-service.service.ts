import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
 

  constructor(private httpClient : HttpClient) { }

  private baseURL = "http://localhost:8080/admins";
   isUserLoggedIn() {
let isUserActive = localStorage.getItem("loginStatus");
  return !(isUserActive === null)
   }

  logOut() {
    localStorage.removeItem('loginStatus');
   }




  signup(admin:Admin):Observable<any>
  {
     const headers={'content-type':'application/json'};
     const body=JSON.stringify(admin);
     return this.httpClient.post(`${this.baseURL}/signup`,body,{'headers':headers});
  }
 
  signin(email:any, password:any):Observable<any>
  {
    
     const params=new HttpParams().set('email',email).set('password',password);
     console.log(params);
  return this.httpClient.get(`${this.baseURL}/login`,{params});
  }

}