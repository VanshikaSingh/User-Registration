import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { GetService } from 'src/app/services/get.service';
// import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  formData: any = {};
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('myForm')
  private myForm: NgForm;
  public isRegistered: any;
  constructor(
    // private http: HttpClient,
    private getService: GetService // private router: Router
  ) {
    this.myForm = <NgForm>{};
    sessionStorage.setItem('isRegistered', 'false');
  }

  onSubmit() {
    const response = this.getService.sendDataToApi(this.formData);
    response.subscribe(
      (response) => {
        if (response) {
          this.isRegistered = true;
          sessionStorage.setItem('isRegistered', 'true');
          // this.router.navigate(['/user-profile']);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
