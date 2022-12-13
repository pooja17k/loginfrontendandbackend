import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  appURL: string = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(body: any): Observable<any> {
    return this.http.post(this.appURL + "/register", body);
  }

  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.appURL + "/login", body);
  }
  storeClientAuthorization(token: string): void {
    localStorage.setItem("token", token);
  }
  
  getClientAuthorization(): any {
    const token = localStorage.getItem("token");
    return token; 
  }
  
  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
  
}
