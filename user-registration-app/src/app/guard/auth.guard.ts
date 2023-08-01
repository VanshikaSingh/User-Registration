import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('isRegistered') == 'true') {
    return true;
  } else {
    alert('access denied!');
    return false;
  }
};
