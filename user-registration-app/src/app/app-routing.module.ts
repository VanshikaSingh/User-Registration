import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './page/user-registration/user-registration.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { authGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: UserRegistrationComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
