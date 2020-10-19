import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule } from '@angular/forms';
import { LinkBudgetRangeComponent } from './modules/linkbudget/link-budget-range/link-budget-range.component';
import { LinkBudgetDirectionComponent } from './modules/linkbudget/link-budget-direction/link-budget-direction.component';
import { LinkBudgetMcsComponent } from './modules/linkbudget/link-budget-mcs/link-budget-mcs.component';
import { LinkBudgetModelComponent } from './modules/linkbudget/link-budget-model/link-budget-model.component';
import { LinkBudgetViewComponent } from './modules/linkbudget/link-budget-view/link-budget-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CellCapacityViewComponent } from './modules/cellcapacity/cell-capacity-view/cell-capacity-view.component';
import { GeneralParametersComponent } from './modules/cellcapacity/general-parameters/general-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinkBudgetRangeComponent,
    LinkBudgetDirectionComponent,
    LinkBudgetMcsComponent,
    LinkBudgetModelComponent,
    LinkBudgetViewComponent,
    GeneralParametersComponent,
    CellCapacityViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    NgbModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
