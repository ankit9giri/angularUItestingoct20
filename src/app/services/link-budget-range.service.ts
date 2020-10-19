import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { LinkBudgetRange } from '../classes/link-budget-range';
import { map } from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class LinkBudgetRangeService {


  private baseUrl = 'http://localhost:8080/api/link-budget-range/';

  responseStatus: number;

  isLogin: string;
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getAllLinkBudgetRange(): Observable<any> {
    console.log('localStorage.getItem()', localStorage.getItem('token'), this.isLogin)

    if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
      let tokenStr = 'Bearer ' + localStorage.getItem('token');
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      console.log(headers)
      return this.http.get(this.baseUrl + 'get', { headers, responseType: 'text' as 'json' });
    }
  }

  // createLinkBudgetRange(linkBudgetRange: Object): Observable<Object> {
  //   if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
  //     let tokenStr = 'Bearer ' + localStorage.getItem('token');
  //     const headers = new HttpHeaders().set("Authorization", tokenStr);
  //     return this.http.post(this.baseUrl + 'save', linkBudgetRange, { headers, observe: 'response' });
  //   }
  // }

  updateLinkBudgetRange(linkBudgetRangeObj: LinkBudgetRange): Observable<Object> {
    console.log("updateLinkBudgetRangeupdateLinkBudgetRange Service", linkBudgetRangeObj)
    if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
      let tokenStr = 'Bearer ' + localStorage.getItem('token');
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.put(`${this.baseUrl}update`, linkBudgetRangeObj, { headers, observe: 'response' });
    }
  }

  deleteLinkBudgetRange(id: number): Observable<any> {
    if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
      let tokenStr = 'Bearer ' + localStorage.getItem('token');
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.delete(`${this.baseUrl}delete?id=${id}`, { headers, observe: 'response' });
    }
  }
}
