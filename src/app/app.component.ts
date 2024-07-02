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
  private clr:string;
  public name:string;
  protected pass:string;
  Products:Array<any>;
  // tes= new StoreService()
  constructor(private store:StoreService){

    console.log("constructor called");
    this.clr = "blue"
    this.name = '';
    this.pass = "";
    this.Products = store.ProductList
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
    
  }
  ngOnInit(): void {
    console.log(" ngOnInit called");
  }







  
  getData() {
    console.log(this.name);
    console.log(this.pass);

  }

}
