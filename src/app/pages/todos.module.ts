import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoPageComponent } from './todo-page.component';
import { TodoAddComponent } from './todo-list-component/todo-add/todo-add.component';
import { TodoListComponent } from './todo-list-component/todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list-component/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-list-component/todo-footer/todo-footer.component';
import { FooterComponent } from './footer-component/footer.component';

import { FilterPipe } from '../filters/filter-pipe.pipe';

@NgModule({
    declarations: [TodoPageComponent, TodoAddComponent, TodoListComponent, TodoItemComponent,  TodoFooterComponent, FooterComponent, FilterPipe]
  , imports: [
    CommonModule
    , ReactiveFormsModule
    , 
  ]
  , exports: [
    TodoPageComponent
  ]
})
export class TodosModule { }
