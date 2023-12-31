import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  users: any;

  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.service.getUser().subscribe((users: any) => {
      this.users = users;
    });
  }
}
