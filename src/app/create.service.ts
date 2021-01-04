import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  apiBaseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  onlycountry(form) {
    return this.http.post(`${this.apiBaseUrl}/add1`,form).pipe(
      catchError(this.handleError)
    );
  }
  nocountry(form) {
    return this.http.post(`${this.apiBaseUrl}/add2`,form).pipe(
      catchError(this.handleError)
    );
  }
  nocity(form) {
    return this.http.post(`${this.apiBaseUrl}/add3`,form).pipe(
      catchError(this.handleError)
    );
  }
  all(form) {
    return this.http.post(`${this.apiBaseUrl}/add4`,form).pipe(
      catchError(this.handleError)
    );
  }


  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}