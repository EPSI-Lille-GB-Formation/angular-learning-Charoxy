import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";
import {TodoComp} from "./components/app.todo";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComp],
  template:`
      <summary>Todo List</summary>

      <a
        href="#"
        role="button"
        [class.secondary]="!this.completedFilter && this.completedFilter != null"
        (click) = "onClickTodo()">A faire</a>

      <a
        href="#"
        role="button"
        [class.secondary]="this.completedFilter"
        (click) = "onClickCompleted()">Terminer</a>

      <a
        href="#"
        role="button"
        [class.secondary]="this.completedFilter == null"
        (click) = "onClickAll()">Tout</a>

        <ng-container *ngFor="let todo of TODOS">
          <ng-container *ngIf="this.completedFilter === null">
            <todo [todo]="todo"/>
          </ng-container>
          <todo *ngIf="todo.isCompleted === this.completedFilter" [todo]="todo"/>
        </ng-container>
  `,
  styles: [
    `
    a{
      margin-left: 8px;
    }
    `
  ]
})

export class AppComponent {


  constructor(private todoService :TodoService) {
  }

  todos: Todo[] = [];
  todo: Todo | undefined

  completedFilter: null | boolean = null

  ngOnInit(){
    this.todoService.getAllTodo().subscribe((data) => this.todos = data)
    this.selectID(1)
  }

  selectID(id:number){
    return this.todos[id]
  }

  getDesc(todo:Todo){
    return todo.title + " : " + todo.content
  }

  onClickTodo(){
    this.completedFilter = false
  }

  onClickCompleted(){
    this.completedFilter = true
  }

  onClickAll(){
    this.completedFilter = null
  }

}
