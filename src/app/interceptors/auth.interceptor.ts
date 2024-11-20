import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    let req = request.clone({
      setHeaders:{
                   Authorization:'Bearer '+ token
                 }
    })

    return next.handle(req).pipe(
      catchError((e:HttpErrorResponse):Observable<any> => {
        if(e.status==403){
          return this.handleToken(req,next,'token')
        }
        else{
          return throwError(()=>{return e.message})
        }
      })
    );
  }

  private handleToken(request: HttpRequest<any>, next: HttpHandler, refreshToken: string): Observable<any>{

    return next.handle(request).pipe(
      catchError((e:HttpErrorResponse):Observable<any>=>{
        return throwError(()=>{return e.message})
      })
    )
  }
}
