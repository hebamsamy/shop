import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { IProduct } from '../../Types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  list: Array<IProduct> = []

  constructor(private cartServ: CartService) {
    this.cartServ.cartSubject.subscribe((value) => {
      this.list = value
    })
  }
  del(obj:IProduct){
    this.cartServ.removeFromCart(obj)
    
  }
}
