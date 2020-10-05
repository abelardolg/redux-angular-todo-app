import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Todo } from '../../../models/todo.models';
import { FilterType } from 'src/app/types/filter.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: FilterType;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   /* this.store.select('todos')
    .subscribe(todos => this.todos = todos);*/
    this.store.subscribe(({todos, filter}) =>
      {
        this.todos = todos;
        this.currentFilter = filter;
      }
    );
  }

}
