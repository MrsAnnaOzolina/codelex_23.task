// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { select, Store } from '@ngrx/store';
// import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
// import { ServiceService } from '../service/service.service';
// import { showList, showListSuccessfully } from '../state/data.actions';
// import { selectList } from '../state/data.selector';

// @Injectable()

// export class ListEffect {
//     constructor(
//         private actions$:Actions,
//         // private myListService: ServiceService,
//         // private store: Store
//     ) {}
//     // loadAllList$ = createEffect (()=>
//     // this.actions$.pipe(
//     //     ofType(showList),
//     //     withLatestFrom(this.store.pipe(select(selectList))),
//     //     mergeMap(([,listFromStore]) => {
//     //         if (listFromStore.length > 0) {
//     //             return EMPTY;
//     //         }
//     //         return this.myListService
//     //         .getData()
//     //         .pipe(map((data)=>
//     //             showListSuccessfully({list:data})
//     //         ));
           
//     //     })
//     // )
//     // )
// }