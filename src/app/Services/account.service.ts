import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin } from '../Types/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlLogin = "http://localhost:5170/api/Account/login"

  constructor(private http: HttpClient) { }

  login(obj: any) {
    return this.http.post(this.urlLogin, obj)
  }
  signUp(){
    
  }

}
