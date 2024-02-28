import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Registration/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}


// login() {
//   const error = this.authService.login(this.email, this.password);
//   if (!error) {
//     this.router.navigate(['/client']);
//   } else {
//     this.errorMessage = error;
//   }
// }
login() {
  const result = this.authService.login(this.email, this.password);
  if (result === true) {
    this.router.navigate(['/client']);
  } else {
    this.errorMessage = result as string;
  }
}
}
