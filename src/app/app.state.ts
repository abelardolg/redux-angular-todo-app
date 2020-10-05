import { Todo } from './models/todo.models';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './pages/todo.reducer';
import { filterReducer } from './pages/todo-list-component/todo-footer/todo-filter/filter.reducer';
import { FilterType } from './types/filter.type';

export interface AppState {
    todos: Todo[];
    filter: FilterType;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer
    , filter: filterReducer
}
