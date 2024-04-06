import { Routes } from '@angular/router';
import {TodoDetailsComponent} from "./todo-details/todo-details.component";

export const routes: Routes = [
  {path: "task/:id", component: TodoDetailsComponent},
];
