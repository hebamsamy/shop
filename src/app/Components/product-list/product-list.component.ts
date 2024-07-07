import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProductAPI } from '../../Types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:Array<IProductAPI> = []

  constructor(private prdServ:ProductService){
    
    this.prdServ.getAllProduct().subscribe(
      {
      next:(res:any)=>{
        this.products = res['data']
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
