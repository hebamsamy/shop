import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  const token= inject(AuthService).getToken()
  //JWT
  const headers = req.headers.set('Authorization', `Bearer ${token}`);
  const authReq = req.clone({ headers });

  console.log('old' , req);
  console.log('new' , authReq);
  
  
  return next(authReq);
};

//ng g interceptor name
