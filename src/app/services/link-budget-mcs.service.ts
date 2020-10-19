import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LinkBudgetMcs } from '../classes/link-budget-mcs';

@Injectable({
  providedIn: 'root'
})
export class LinkBudgetMcsService {
  private baseUrl = 'http://localhost:8080/api/link-budget-mcs/';

  responseStatus: number;
  token: string;
  isLogin: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = localStorage.getItem('token');
    this.isLogin = localStorage.getItem('isLogin');
  }

  getAllLinkBudgetMcs(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      console.log("mcs service ", this.token, this.isLogin == 'true')
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'get', { headers, responseType: 'text' as 'json' });
    }
  }

  createLinkBudgetMcs(linkBudgetMcs: Object): Observable<Object> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.post(this.baseUrl + 'save', linkBudgetMcs, { headers, observe: 'response' });
    }
  }

  updateLinkBudgetMcs(linkBudgetMcsObj: LinkBudgetMcs): Observable<Object> {
    console.log("updateLinkBudgetMcsupdateLinkBudgetMcs Service", linkBudgetMcsObj)
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.put(`${this.baseUrl}update`, linkBudgetMcsObj, { headers, observe: 'response' });
    }
  }

  deleteLinkBudgetMcs(id: number): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.delete(`${this.baseUrl}delete?id=${id}`, { headers, observe: 'response' });
    }
  }
}
