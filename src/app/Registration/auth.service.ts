import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor() { }
  
register( firstName: string, lastName: string,email: string, password:string): void {
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  const newUser = {  firstName, lastName,email, password,timestamp: new Date() };
  registeredUsers.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  console.log('Registration successful:', firstName);
}
getRegisteredUsers(): any[] {
  return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
 
}



  login(email: string, password: string): boolean | string {
    
  
  const registeredUsers = this.getRegisteredUsers();
  console.log('Registered Users:', registeredUsers);

  
  const normalizedEmail = email.toLowerCase();
  const user = registeredUsers.find(u => u.email.toLowerCase() === normalizedEmail);
  if (!user) {
    return 'Email not found';
  }
  if (user.password !== password) {
    return 'Password incorrect';
  }
  return true;
}
//   const user = registeredUsers.find(u => u.email === email);
//   if (!user) {
//     return 'Email not found';
//   }
//   if (user.password !== password) {
//     return 'Password incorrect';
//   }
//   return true;
// }
  
}
