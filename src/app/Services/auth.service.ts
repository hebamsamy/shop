import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedUserSubject: BehaviorSubject<boolean>
  constructor() {
    this.isloggedUserSubject = new BehaviorSubject<boolean>(this.isloggedUser())
  }

  isloggedUser(): boolean {
    return (localStorage.getItem('bxmnczxhcv') == null) ? false : true
  }
  getToken():string{
    return localStorage.getItem('bxmnczxhcv') ?? ""
  }

  userlogin(token: string) {
    localStorage.setItem('bxmnczxhcv', token)
    this.isloggedUserSubject.next(true)
  }
  userlogout() {
    localStorage.removeItem('bxmnczxhcv')
    this.isloggedUserSubject.next(false)
  }

}
