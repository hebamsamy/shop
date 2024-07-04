import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  constructor(private router: Router, private builder: FormBuilder) {
    //<Form>   => Group
    //<input>  => Control
    this.form = this.builder.group({
      email: ["", [Validators.required, Validators.email, Validators.minLength(11)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
    })
  }
  send() {
    console.log(this.form.value);
    //call API
    // for (const iterator in this.form.controls) {
    //   console.log(iterator);
      
    // }
    

    //nevigate to /home
    //  routerLink="/product/{{product.id}}"
    // this.router.navigateByUrl("/about")


    // [routerLink]="['/product',product.id]"
    // this.router.navigate(["/product",id])
  }
}
