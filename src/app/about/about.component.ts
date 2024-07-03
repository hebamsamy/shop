import { Component } from '@angular/core';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
productCount:number;
constructor(private Service:StoreService){
  this.productCount =  this.Service.ProductList.length
}
}
