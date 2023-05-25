import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminUsersComponent } from './components/feature/admin-users/admin-users.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedComponentsModule
  ]
})
export class AdminModule { }
