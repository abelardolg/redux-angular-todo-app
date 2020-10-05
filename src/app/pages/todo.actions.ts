import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo] Create'
    , props<{ texto: string}>()
);
export const editar = createAction(
    '[Todo] Edit'
    , props<{ id: number, texto: string }>()
);
export const borrar = createAction(
    '[Todo] Delete'
    , props<{ id: number }>()
);
export const deleteCompleted = createAction(
    '[Todo] Delete Completed'    
);
export const toggle = createAction(
    '[Todo] Toggle'
    , props<{ id: number }>()
);
export const toggleAll = createAction(
    '[Todo] Toggle All'
    , props<{ completado: boolean }>()
);
