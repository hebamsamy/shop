import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id:number;
  constructor(private active:ActivatedRoute){
    this.id = this.active.snapshot.params['id']
    console.log( );
    
  }
}
