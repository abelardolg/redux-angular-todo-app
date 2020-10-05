import { createReducer, on } from '@ngrx/store';

import * as actions from './filter.actions';
import { FilterEnum } from '../../../../enums/filter.enum';
import { FilterType } from '../../../../types/filter.type';

export const filtroInicial: FilterType = FilterEnum.ALL;

const _filterReducer = createReducer(
  filtroInicial
  , on (actions.setFilter, (state, {filter}) => filter)

);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
