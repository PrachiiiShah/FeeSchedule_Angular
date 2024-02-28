import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Registration/auth.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  register(registrationForm: NgForm) {
    if (this.password === this.confirmPassword) {
      try {
        this.authService.register(this.firstName, this.lastName, this.email, this.password);
        alert('Registration successful');
        this.router.navigate(['/history']);
      } catch (error:any) {
        alert(error.message);
      }
    } else {
      alert('Passwords do not match');
      registrationForm.reset();
    }
  }
  // register(registrationForm: NgForm) {
  //   if (registrationForm.valid && this.password === this.confirmPassword) {
     
  //     alert('Registration successful');
  //   } else {
  //     alert('Passwords do not match');
  //     registrationForm.reset();
  //   }
  // }
}



