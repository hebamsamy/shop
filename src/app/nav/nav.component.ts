import { Component } from '@angular/core';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  count:number;
  date= new Date()
  constructor(private xyz:StoreService){
    this.count = xyz.ProductList.length
  }
}
