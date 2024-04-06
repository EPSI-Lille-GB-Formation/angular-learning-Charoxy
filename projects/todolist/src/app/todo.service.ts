import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodo(){
    return this.http.get<Todo[]>('api/todo')
  }

  getTodoById(todoId: number){
    return this.http.get<Todo>("api/todo/"+ todoId).pipe(
      tap((data) => console.log(data))
    )
  }
}
