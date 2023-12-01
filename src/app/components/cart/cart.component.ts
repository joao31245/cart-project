import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../service/item.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone : true,
  imports: [CommonModule]

})
export class CartComponent implements OnInit{

  items : Item[] = [];

  constructor(public service : ItemService) {

  }

  ngOnInit(): void {
    this.getItems();
    console.log(this.items);
  }

  getItems() {
    this.service.getItems().subscribe(data => {
      this.items = data;
    })
  }

}
