import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template:`
    <details>
      <summary>Todo List</summary>
      <ul>
        <ng-container *ngFor="let todo of TODOS">
          <ng-container *ngIf="!todo.isCompleted">
            <li >
              {{getDesc(todo)}}
            </li>
          </ng-container>
        </ng-container>
      </ul>
    </details>
  `,
  styles: []
})

export class AppComponent {

  protected readonly TODOS = TODOS;
  todo: Todo | undefined

  ngOnInit(){
    console.table(TODOS)
    this.selectID(1)
  }

  selectID(id:number){
    return TODOS[id]
  }

  getDesc(todo:Todo){
    return todo.title + " : " + todo.content
  }

}
