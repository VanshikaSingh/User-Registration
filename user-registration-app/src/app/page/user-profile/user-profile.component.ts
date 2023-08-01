import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  users: any;
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getUser().subscribe((users: any) => {
      this.users = users;
    });
  }
}
