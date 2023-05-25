import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { UserAccountUiComponent } from './components/ui/user-account-ui/user-account-ui.component';


@NgModule({
  declarations: [
    UserAccountUiComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ],
  exports: [
    UserAccountUiComponent
  ]
})
export class SharedComponentsModule { }
