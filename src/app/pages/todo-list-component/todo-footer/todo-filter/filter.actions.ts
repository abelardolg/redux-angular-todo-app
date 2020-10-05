import { createAction, props } from '@ngrx/store';
import { FilterType } from '../../../../types/filter.type';

export const setFilter = createAction(
    '[Filter] SetFilter'
    , props<{ filter: FilterType }>()
);
