import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { LinkBudgetViewComponent } from './modules/linkbudget/link-budget-view/link-budget-view.component';
import { CellCapacityViewComponent } from './modules/cellcapacity/cell-capacity-view/cell-capacity-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: "login",
    component: LoginComponent
  }, {
    path: 'fiveGdimension',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent,
      // canActivateChild: [AuthGuard]
    }, {
      path: 'link-budget',
      component: LinkBudgetViewComponent,
      // canActivateChild: [AuthGuard]
    }, {
      path: 'cell-capacity',
      component: CellCapacityViewComponent,
      // canActivateChild: [AuthGuard]
    }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
