import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkBudgetViewService {
  baseUrl: string = 'http://localhost:8080/api/';
  token: string;
  isLogin: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = localStorage.getItem('token');
    this.isLogin = localStorage.getItem('isLogin');
  }


  getAllLinkBudgetRangeMap(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'link-budget-range/getRangeMap', { headers, responseType: 'text' as 'json' });
    }
  }

  getAllLinkBudgetDirectionMap(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'link-budget-direction/getDirectionMap', { headers, responseType: 'text' as 'json' });
    }
  }

  getAllLinkBudgetMcsMap(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'link-budget-mcs/getMcsMap', { headers, responseType: 'text' as 'json' });
    }
  }

  getAllLinkBudgetModelMap(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'link-budget-model/getModelMap', { headers, responseType: 'text' as 'json' });
    }
  }
}
