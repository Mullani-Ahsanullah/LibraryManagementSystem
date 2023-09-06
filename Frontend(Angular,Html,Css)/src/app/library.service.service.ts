import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService{
 
 
  private baseURL = "http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
  
  getBookList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  findByBookName(bookName: any): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}?name=${bookName}`);
  }

  getBookDetailsByAuthorName(authorName: any): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/auth?name=${authorName}`);
  }

  saveBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  getBookById(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }
  
  updateLibraryDetalisById(bookId: number, book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${bookId}`, book);
  }

  deleteBookById(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteBook/${bookId}`);
  }

  deleteAllBook(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByBookPublish(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/bookPublish`);
  }

  findByBookNotPublish(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/bookNotPublish`);
  }
  SortByPrice(pathVar:string,fieldName:string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/price/${pathVar}?price=${fieldName}`);
  }
  SortByBookName(pathVar:string,fieldName:string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/bookName/${pathVar}?bookName=${fieldName}`);
  }
  SortByAuthorName(pathVar:string,fieldName:string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/authorName/${pathVar}?authorName=${fieldName}`);
  }
  getBooksByAuthorId(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/byAuthor/${id}`);
  }

  linkAuthorToBook(bookId: any, selectedAuthor: number) {
    return this.httpClient.get<Book>(`${this.baseURL}/byAuthor/${bookId}`);
  }
}