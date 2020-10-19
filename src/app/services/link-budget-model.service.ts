import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LinkBudgetModel } from '../classes/link-budget-model';

@Injectable({
  providedIn: 'root'
})
export class LinkBudgetModelService {

  private baseUrl = 'http://localhost:8080/api/link-budget-model/';

  responseStatus: number;
  token: string;
  isLogin: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = localStorage.getItem('token');
    this.isLogin = localStorage.getItem('isLogin');
  }

  getAllLinkBudgetModel(): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      console.log("model service ", this.token, this.isLogin == 'true')
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.get(this.baseUrl + 'get', { headers, responseType: 'text' as 'json' });
    }
  }

  createLinkBudgetModel(linkBudgetModel: Object): Observable<Object> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.post(this.baseUrl + 'save', linkBudgetModel, { headers, observe: 'response' });
    }
  }

  updateLinkBudgetModel(linkBudgetModelObj: LinkBudgetModel): Observable<Object> {
    console.log("updateLinkBudgetModelupdateLinkBudgetModel Service", linkBudgetModelObj)
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.put(`${this.baseUrl}update`, linkBudgetModelObj, { headers, observe: 'response' });
    }
  }

  deleteLinkBudgetModel(id: number): Observable<any> {
    if (this.token && this.isLogin == 'true') {
      let tokenStr = 'Bearer ' + this.token;
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.delete(`${this.baseUrl}delete?id=${id}`, { headers, observe: 'response' });
    }
  }
}
