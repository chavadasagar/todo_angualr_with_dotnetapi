import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apibaseurl: string = "https://localhost:44322/api/todo/";
  getalltodourl: string = this.apibaseurl + "getalltodo";
  addtodourl: string = this.apibaseurl + "addtodo";
  getidbytodourl: string = this.apibaseurl + "getidbytodo/";
  updatetodourl:string = this.apibaseurl + "updatetodo/"
  deletetodourl:string = this.apibaseurl + "deletetodo/"


  constructor(private http: HttpClient) { }

  public getAlltodo(): Observable<Todo> {
    return this.http.get<Todo>(this.getalltodourl);
  }
  public addtodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.addtodourl, todo);
  }
  public getidbytodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.getidbytodourl+id.toString()); 
  }
  public updatetodo(todo:Todo,id:number)
  {
    return this.http.put<Todo>(this.updatetodourl+id,todo);
  }
  public deletetodo(id:number)
  {
    debugger
    return this.http.delete(this.deletetodourl+id);
  }
}
