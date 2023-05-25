import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent {
  users!: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
