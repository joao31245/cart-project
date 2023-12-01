import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ItemService } from './service/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports : [CartComponent, HttpClientModule, CommonModule],
  providers: [ItemService]
})
export class AppComponent {
  title = 'cart-project';
}
