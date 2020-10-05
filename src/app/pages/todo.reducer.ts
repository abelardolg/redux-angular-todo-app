import { createReducer, on } from '@ngrx/store';

import * as actions from './todo.actions';
import { Todo } from '../models/todo.models';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo')
];

const _todoReducer = createReducer(
    estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)])
  , on(actions.editar, (state, {id, texto})  => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  })
  , on(actions.borrar, (state, {id})  => {
    return state.filter(todo => todo.id !== id);
  })
  , on(actions.toggle, (state, {id})  => {
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completado: !todo.completado
          };
        } else {
          return todo;
        }
      });
  })
  , on(actions.toggleAll, (state, {completado})  => {
    return state.map(todo => {
        return {
          ...todo,
          completado: completado
        };
    });
})
, on(actions.deleteCompleted, (state)  => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
