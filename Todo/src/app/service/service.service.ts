import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { List } from "../models/list.model"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<List[]>("http://localhost:3004/myList?_sort=id&_order=desc")
  }
  // deleteData(id: number) {
  //   return this.http.delete<List>(`http://localhost:3004/myList/${id}`)
  // }
  // addData(name: string, type: string) {
  //   return this.http.post<List[]>("http://localhost:3004/myList/", {
  //     name,
  //     type
  //   })
  // }
  // filterData() {
  //   return this.http.get<List[]>("http://localhost:3004/myList?type=home")
  // }
}

