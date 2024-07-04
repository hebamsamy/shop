import { Component } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  count:number;
  cart:number = 0;
  date= new Date()
  constructor(private xyz:StoreService,private cartServ:CartService){
    this.count = xyz.ProductList.length
    cartServ.cartSubject.subscribe((value)=>{
      this.cart = value.length
    })

  }
}
