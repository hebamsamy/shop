import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { userLogin } from '../../Types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private accServ:AccountService) {
    //<Form>   => Group
    //<input>  => Control
    this.form = this.builder.group({
      UserName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]([a-zA-Z0-9]{0,28}|[a-zA-Z0-9]{0,26}[_.]?[a-zA-Z0-9]{0,26}|[a-zA-Z0-9]{0,27}[_.]?|[_.]?[a-zA-Z0-9]{0,27})[a-zA-Z0-9]$/)]],
      Password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }
  send() {
    console.log(this.form.value);
    //call API

    // let data :userLogin =
    // {
    //   UserName :this.form.controls['UserName'].value,
    //   Password :this.form.controls['Password'].value,
    //   RemembeMe:false
    // }
    
    this.accServ.login(this.form.value as userLogin).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    //nevigate to /home
    //  routerLink="/product/{{product.id}}"
    // this.router.navigateByUrl("/about")
  }
}
