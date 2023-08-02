import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  Validators,
  NgForm,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
// import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  public hide = true;

  public myForm: FormGroup;
  public isRegistered: any;

  constructor(
    // private http: HttpClient,
    private RegistrationService: RegistrationService, // private router: Router,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
    });

    sessionStorage.setItem('isRegistered', 'false');
  }

  onSubmit() {
    const response = this.RegistrationService.sendDataToApi(this.myForm.value);
    response.subscribe(
      (response: any) => {
        if (response) {
          this.isRegistered = true;
          sessionStorage.setItem('isRegistered', 'true');
          // this.router.navigate(['/user-profile']);
        }
      },
      (error: any) => {
        this.isRegistered = false;
        console.error('Error:', error);
      }
    );
  }
}
