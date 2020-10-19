import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LinkBudgetDirection } from '../classes/link-budget-direction';

@Injectable({
  providedIn: 'root'
})
export class LinkBudgetDirectionService {

  private baseUrl = 'http://localhost:8080/api/link-budget-direction/';

  responseStatus: number;
  token: string;
  isLogin: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = localStorage.getItem('token');
    this.isLogin = localStorage.getItem('isLogin');
  }

  getAllLinkBudgetDirection(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      console.log("direction service ", this.token, this.isLogin == 'true')
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'get', { headers, responseType: 'text' as 'json' });
    }
  }

  createLinkBudgetDirection(linkBudgetDirection: Object): Observable<Object> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.post(this.baseUrl + 'save', linkBudgetDirection, { headers, observe: 'response' });
    }
  }

  updateLinkBudgetDirection(linkBudgetDirectionObj: LinkBudgetDirection): Observable<Object> {
    console.log("updateLinkBudgetDirectionupdateLinkBudgetDirection Service", linkBudgetDirectionObj)
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.put(`${this.baseUrl}update`, linkBudgetDirectionObj, { headers, observe: 'response' });
    }
  }

  deleteLinkBudgetDirection(id: number): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.delete(`${this.baseUrl}delete?id=${id}`, { headers, observe: 'response' });
    }
  }
}
