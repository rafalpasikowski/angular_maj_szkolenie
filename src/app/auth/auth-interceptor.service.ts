import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    })
    return next.handle(authRequest)
      .pipe(catchError(err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401) {
            this.auth.authorize();
          }
        }
        return throwError(new Error(err.error.error.message));
      }));
  }
}
