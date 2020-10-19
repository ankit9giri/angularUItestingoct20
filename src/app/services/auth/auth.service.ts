import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string = "http://localhost:4200"; // client
  private baseUrl = "http://127.0.0.1:8080/api/"; // server


  constructor(private http: HttpClient, private router: Router) {
  }

  gettoken() {
    return localStorage.getItem("token");
  }

  login(authRequstParam): Observable<any> {
    let url = this.baseUrl + "authenticate";
    console.log("authenticate")
    return this.http.post(url, authRequstParam, { responseType: 'text' as 'json' });
  }

  // signUp(userDetail: UserDetail): Observable<any> {
  //   let url = this.baseUrl + "registerUser";
  //   return this.http.post(url, userDetail);
  // }

  logout() {
    // Remove the token from the localStorage. 
    this.isLoggedIn = false;
    console.log('before ', localStorage.getItem('token'))
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    console.log('after ', localStorage.getItem('token'))

    this.router.navigate(['']);
  }

}
