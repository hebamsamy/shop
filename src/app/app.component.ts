import { Component} from '@angular/core';
import { StoreService } from './Services/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent  {
  // binding
  // banana in box [(ngModel)]
  // intrerpolation {{}}
 
  Products:Array<any>;
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


  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
  ngOnInit(): void {
    console.log(" ngOnInit called");
  }







  
  getData() {

  }

}
