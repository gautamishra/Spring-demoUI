import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


export class HttpIntercepterService implements HttpInterceptor {

  constructor() {
    console.log('intercepter invoked');
   }

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    return next.handle(req.clone({withCredentials: true}));
  }
}
