import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
  send(){


    //nevigate to /home
    //  routerLink="/product/{{product.id}}"
    this.router.navigateByUrl("/about")


    // [routerLink]="['/product',product.id]"
    // this.router.navigate(["/product",id])
  }
}
