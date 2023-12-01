import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../service/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone : true,
  imports: [CommonModule,]

})
export class CartComponent implements OnInit{

  items : Item[] = [];
  @Input() quantities: number[] = [];

  @Input() cartItems : Item[] = [];
  @ViewChildren('quantityInput') quantityInputs!: QueryList<ElementRef>;

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

  addCart() {
    const quantities: number[] = [];
    this.quantityInputs.forEach((input: ElementRef) => {
      quantities.push(+input.nativeElement.value);
    });

    console.log(quantities);
  }
}
