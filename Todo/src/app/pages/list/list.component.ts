// import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { showList } from 'src/app/store/data.actions';
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
       console.log(this.list$)
    
  }
//   ngOnInit(): void {
// this.store.dispatch(showList())


//   }


}
