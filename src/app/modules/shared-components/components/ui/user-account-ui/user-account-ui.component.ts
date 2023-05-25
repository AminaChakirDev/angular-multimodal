import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-account-ui',
  templateUrl: './user-account-ui.component.html',
  styleUrls: ['./user-account-ui.component.css']
})
export class UserAccountUiComponent {
  @Input() user!: User | undefined;
}
