import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Todo} from "../todo";
import {HovercardDirective} from "../hovercard.directive";

@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HovercardDirective],
  template:`
    <article Hovercard style="display: flex; width: 80%; margin: 50px auto; justify-content: space-between" >
      <div>
        <input type="checkbox"
               [checked]="todo.isCompleted"
               name="{{todo.id}}"
               id="{{todo.id}}"
               (change)="onCheck()"
        >
        {{todo.title}}
      </div>
      <div class="action">
        <a>Edit</a>
        <a>Del</a>
      </div>
    </article>
  `,
  styles: [
    `
      .action{
        display: flex;
        justify-content: end;
      }

      .action a,
        a{
        margin-left: 8px;
      }
    `
  ]
})

export class TodoComp {

  @Input() todo! : Todo

  onCheck(){
    this.todo.isCompleted = !this.todo.isCompleted
  }

}
