import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin } from '../Types/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlLogin = "https://localhost:64346/Account/SignIn"

  constructor(private http: HttpClient) { }

  login(obj: userLogin) {
    return this.http.post(this.urlLogin, obj)
  }
  signUp(){
    
  }

}
