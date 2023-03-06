// import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addNewItem, deleteOneItem } from 'src/app/store/data.actions';
import { List } from "../../models/list.model"
// import { ServiceService } from "../../service/service.service"
// import { selectList} from "../../state/data.selector"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<List[]>;


  constructor(private store: Store<{list: List[]}>) { 
 this.list$ = store.select('list')
  
  }
  deleteOneItem(id:number){
    this.store.dispatch(deleteOneItem({id}));
  };
  addNewItem(newItem:List){
    this.store.dispatch(addNewItem({newItem}))
  }
}
