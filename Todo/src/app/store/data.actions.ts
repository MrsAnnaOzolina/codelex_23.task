import { createAction,props } from '@ngrx/store';

import{ List } from "../models/list.model"

export const showList = createAction('[List Component] ShowList');
// export const showListSuccessfully =  createAction('[List Component] showListSuccessfully', props<{myList: List[] }>());

//props<{list: List[] }>