import { Component } from '@angular/core';
import { AuthService } from 'src/app/Registration/auth.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  registrationHistory: { firstName: string, lastName:string, role:string, timestamp: Date }[] = [];

  constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.registrationHistory = this.authService.registeredUsers.map(user => ({ email: user.email, firstName: user.firstName, timestamp: user.timestamp }));
  // }
  ngOnInit(): void {
    this.registrationHistory = this.authService.getRegisteredUsers().map(user => ({ firstName: user.firstName, lastName:user.lastName, role:user.role,timestamp: user.timestamp }));
  }
}
