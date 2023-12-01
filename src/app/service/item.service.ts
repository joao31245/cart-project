import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url : string = "http://localhost:8080/items";

  constructor(public http : HttpClient) {

   }

  getItems() : Observable<Item[]> {
      return this.http.get<GetResponse>(this.url).pipe(map(response => response._embedded.items));
  }

}

export interface GetResponse {
  _embedded : {
      items : Item[];
  }
}