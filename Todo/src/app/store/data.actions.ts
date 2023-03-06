import { createAction,props } from '@ngrx/store';
import { List } from "../models/list.model"
 

export const deleteOneItem =  createAction('[List Component] delete One Item', props<{id: number }>());
export const addNewItem =  createAction('[List Component] add New Item', props<{newItem: List }>());

