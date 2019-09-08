import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, timeout } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';


export class HttpIntercepterService implements HttpInterceptor {

  constructor(private notificationService: NotificationsService) {
    console.log('intercepter invoked');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({ withCredentials: true }))
      .pipe(
        tap((res: any) => {
          if (res instanceof HttpResponse) {
            console.log(res);
            return res;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.handleError(error.error);
          return throwError(error);
        }
        )
      );
  }

  handleError = (error: any) => {
    error = JSON.parse(error);
    if (error.status === 500) {
      this.notificationService.error('Error', error.message , {timeout: 1000} );
    }
  }
}
