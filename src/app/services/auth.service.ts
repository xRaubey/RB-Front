import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  authToken(token:string|null){
    return this.http.post('http://localhost:3001/auth/verify',{token:token});
  }
}
