import { Injectable } from '@angular/core';
import { IProduct } from '../Types/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartSubject:BehaviorSubject<Array<IProduct>>
  // cartSubject:Subject<Array<IProduct>>
  cart: Array<IProduct>
  constructor() {
    this.cartSubject = new BehaviorSubject<Array<IProduct>>([])
    // this.cartSubject = new Subject<Array<IProduct>>()
    this.cart = []
  }
  
  addtocart(obj: IProduct) {
    this.cart.push(obj)
    this.cartSubject.next(this.cart)    
  }

  removeFromCart(obj:IProduct){
    this.cart =  this.cart.filter((item)=>item.id != obj.id)
    console.log( "After remove ",this.cart);
    this.cartSubject.next(this.cart)
  }

}
