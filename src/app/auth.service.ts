import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from  './user';
import { JwtResponse } from  './jwt-response';

import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  AUTH_SERVER = "http://localhost:4000";
  authSubject  =  new  BehaviorSubject(false);
  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          //localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );

  }
  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }
  isAuthenticated() {
    return  this.authSubject.asObservable();
}
}