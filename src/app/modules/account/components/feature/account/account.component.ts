import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  user!: User | undefined;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.dataService.getUserById(parseInt(params['id'])).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
