import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralParameterService {



  private baseUrl = 'http://localhost:8080/api/general-parameter/';

  responseStatus: number;

  isLogin: string;
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  updateDimGeneralParameter(dimGP): Observable<Object> {

    if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
      let tokenStr = 'Bearer ' + localStorage.getItem('token');
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      return this.http.put(`${this.baseUrl}update`, dimGP, { headers, observe: 'response' });
    }
  }

  getAllDimGeneralParameters(): Observable<any> {

    if (localStorage.getItem('token') && localStorage.getItem('isLogin') == 'true') {
      let tokenStr = 'Bearer ' + localStorage.getItem('token');
      const headers = new HttpHeaders().set("Authorization", tokenStr);
      console.log(headers)
      return this.http.get(this.baseUrl + 'get', { headers, responseType: 'text' as 'json' });
    }
  }

}
