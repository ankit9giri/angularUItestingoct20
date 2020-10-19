import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  isAdmin: boolean = this.authService.isAdmin;
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  logout() {
    this.authService.logout();
  }
}
