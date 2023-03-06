// import {showListSuccessfully, showList} from "./data.actions";
import { createReducer, on } from '@ngrx/store';
import { List } from "../models/list.model"
import { addNewItem,deleteOneItem } from './data.actions';

export const initialState: List[] =[
        {
            id:1,
            name: "finish review",
            type: "work"
    }, 
    {
        id:2,
        name: "clean house ",
        type: "house"
    }
]
 ;

export const listReducer = createReducer(
    initialState,
    on(deleteOneItem, (state, {id}) => {
       const list = state.filter((list) => list.id !== id );
       return list;
    }),
    on(addNewItem, (state, {newItem}) => {
        // const newArray = state
        //  newArray.push(newItem)
    //   return {

    //     ...state,
    //     newItem: newItem
    //   }

      const newArray: List[] = JSON.parse(JSON.stringify(state));
      newArray.push(newItem);
    return newArray;
            
        
     }),
)