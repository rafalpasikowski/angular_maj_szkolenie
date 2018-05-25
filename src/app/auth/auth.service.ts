import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';
  authorize() {
    const url = 'https://accounts.spotify.com/authorize/';
    const client_id = '';
    const response_type = 'token';
    const redirect_uri = 'http://localhost:4200/';
    const p = new HttpParams({
      fromObject: {
        client_id,
        response_type,
        redirect_uri,
        state: this.router.routerState.snapshot.url
      }
    });
   const redirect = `${url}?${p.toString()}`;
   window.location.replace(redirect);
   sessionStorage.removeItem('token');
  }
  getToken() {
    this.token = JSON.parse(sessionStorage.getItem('token'));
    if (!this.token && location.hash) {
      const receivedParams = new HttpParams({
        fromString: location.hash.replace('#', '')
      });
      this.token = receivedParams.get('access_token');
      location.hash = '';
      sessionStorage.setItem('token', JSON.stringify(this.token));
      const state = receivedParams.get('state');
      this.router.navigateByUrl(state);
    }
    if (!this.token) {
      this.authorize();
      return '';
    }
    return this.token;
  }
  constructor(private router: Router) { }
}
