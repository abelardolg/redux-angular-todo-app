import { Component, OnInit } from '@angular/core';
import { FilterType } from '../../../types/filter.type';
import { FilterEnum } from '../../../enums/filter.enum';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';

import * as filterActions from './todo-filter/filter.actions';
import * as todoActions from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  numTodoPendings: number = 0;

  currentFilter: FilterType = FilterEnum.ALL;
  filters: FilterType[] = [FilterEnum.ALL, FilterEnum.PENDING, FilterEnum.COMPLETED];

  constructor(private store: Store<AppState>) {
    this.store.subscribe(({todos, filter}) =>
    {
      this.numTodoPendings = todos.filter(todo => !todo.completado).length;
      this.currentFilter = filter;
    });
  }

  ngOnInit(): void {
  }

  setFilter(selectedFilter: FilterType): void {
    this.store.dispatch(
      filterActions.setFilter({filter: selectedFilter})
    );
  }

  deleteCompleted() {
    this.store.dispatch(
      todoActions.deleteCompleted()
    );
  }

}
