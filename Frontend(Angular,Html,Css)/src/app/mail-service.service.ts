import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  private baseURL = "http://localhost:8080/email/";
  constructor(private httpClient: HttpClient) { };
  checkEmail(mail:string,book:Book):Observable<Object>{
    console.log(book);
    return this.httpClient.post(`${this.baseURL}?userEmail=${mail}`,book);
}
}