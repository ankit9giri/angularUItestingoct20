import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authRequstParam: any = {
    username: "",
    password: ""
  };
  user = "";

  response: any;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }
  ngOnInit() { }

  login(username, password) {
    this.authRequstParam.username = username;
    this.authRequstParam.password = password;
    console.log(username, password)
    if (username && password) {
      this.authService.login(this.authRequstParam)
        .subscribe(
          (token) => {
            console.log("User is logged in :  " + token);
            if (token) {
              // this.authService.isLoggedIn = true;
              localStorage.setItem('isLogin', 'true');
              localStorage.setItem('token', token);
              this.router.navigate(['/fiveGdimension']);
            }
          });
    }
  }

  public accessApi(token) {
    //  Fetch required Data for Dashboard
    // let resp = this.authService.someApi(token);
    // resp.subscribe((data) => {
    //   this.response = data;
    // });
    // this.router.navigate(['/dashboard']);
  }

}