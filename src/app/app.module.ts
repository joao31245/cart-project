import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './service/item.service';



@NgModule({
  declarations: [
    CartComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    CartComponent,
    AppComponent,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
