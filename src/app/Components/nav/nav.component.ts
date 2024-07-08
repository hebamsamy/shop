import { Component } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { CartService } from '../../Services/cart.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  count:number;
  cart:number = 0;
  date= new Date();
  isuserExist:boolean = false
  constructor(private xyz:StoreService,private cartServ:CartService,private authServ:AuthService){
    this.count = xyz.ProductList.length
    cartServ.cartSubject.subscribe((value)=>{
      this.cart = value.length
    })
    // this.isuserExist = this.authServ.isloggedUser()
    this.authServ.isloggedUserSubject.subscribe(value=>{
      this.isuserExist = value
      console.log('is user' ,value);
      
    })

  }
  logout(){
    this.authServ.userlogout()
  }
}
