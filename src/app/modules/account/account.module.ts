import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { AccountComponent } from './components/feature/account/account.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedComponentsModule
  ]
})
export class AccountModule { }
