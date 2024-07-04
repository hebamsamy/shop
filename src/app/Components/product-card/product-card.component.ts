import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../../Types/product';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct 
  // @Output()

  constructor(private cartServ:CartService){

  }
  add(){
    this.cartServ.addtocart(this.product)
  }
}
