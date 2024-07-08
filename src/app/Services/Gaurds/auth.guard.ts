import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  console.log(state.url);
  
 const serv = inject(AuthService)
 const router = inject(Router)
 if(serv.isloggedUser()){
  return true;
 }
 else{
  alert('Sorry You Must login Frist')
  router.navigate(['/login',state.url])
  return false;
 }
};


//ng g g name