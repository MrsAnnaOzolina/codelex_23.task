// import {showListSuccessfully, showList} from "./data.actions";
import { createReducer, on } from '@ngrx/store';
import { List } from "../models/list.model"

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
    initialState
    // on(showListSuccessfully, (state, {myList})=>{
    //     return {...state,
    //         myList}
    // })
)