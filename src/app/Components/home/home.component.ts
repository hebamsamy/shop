import { Component } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { IProduct } from '../../Types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Products:Array<IProduct>;
  Categories:Array<any>;
  SelectedID:number = 0;
  // tes= new StoreService()
  constructor(private store:StoreService){
    console.log("constructor called");
    this.Products = store.ProductList
    this.Categories = store.Categories
  }

  SelectChange(data:any){
    console.log(data);
    this.SelectedID = data
    this.Products = this.store.filterByCategoryID(this.SelectedID)
    console.log(this.Products);
    
  }
}
