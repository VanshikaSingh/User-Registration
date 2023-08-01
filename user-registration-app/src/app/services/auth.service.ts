import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Implement your login logic here
    // For demonstration purposes, let's assume there's a hardcoded username and password
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      this.isAuthenticated = true;
      return true;
    }

    return false;
  }

  logout() {
    // Implement logout logic here and set isAuthenticated to false
    this.isAuthenticated = false;
  }
  authenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    return this.isAuthenticated;
  }
}
