import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddTokenService {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwcmFjaGkuc2hhaEBvdXRhbWF0aW9uLmNvbSIsInBlcm1pc3Npb25zIjoidXNlciIsIm5hbWUiOiJQcmFjaGkgU2hhaCIsImlkIjo2LCJleHAiOjE3MTMxMjUwODV9.aAhXm6H5efR5F9meO0bH_Y5_tAZICO3s7Jw4m7sNCc4';

    // Clone the request and set the authorization header
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Request intercepted');
    return next.handle(request).pipe(retry(0), catchError(this.errorHandle)); //* retry(1) Pop Up 2 times
  }

  errorHandle(error: HttpErrorResponse): Observable<never> {
    window.alert(error.message);
    return throwError(() => error.message || 'Server Error');
  }
  

}
