import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {

    if (localStorage.getItem('isLogin') == 'true') {
      return true;
    }
    else {
      return this.router.parseUrl("/login");
    }

  }

  //canActivate(next: ActivatedRouteSnapshot,
  //state: RouterStateSnapshot): Observable<boolean> {

  // return this.authService.isLoggedIn
  //   .take(1)
  //   .map((isLoggedIn: boolean) => {
  //     if (!isLoggedIn) {
  //       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //       return false;
  //       // return true;
  //     }
  //     return true;
  //   });
  //}
}