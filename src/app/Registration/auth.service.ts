import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor() { }
  registeredUsers: { email: string, firstName: string, password:string,
  lastName: string,timestamp: Date }[] = [];
// Store data in localStorage
register(email: string, password: string, firstName: string, lastName: string): void {
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  const newUser = { email, firstName, lastName, timestamp: new Date() };
  registeredUsers.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  console.log('Registration successful:', email);
}
getRegisteredUsers(): any[] {
  return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
}

  // register(email: string, password: string, firstName: string, lastName: string): void {
  
  //   const existingUser = this.registeredUsers.find(user => user.email === email);
  //   if (existingUser) {
  //     throw new Error('Email already exists');
  //   }
    
  //   this.registeredUsers.push({ email, firstName, password,lastName, timestamp:new Date() });
  //   console.log('Registration successful:', email);
  // }

  login(email: string, password: string): boolean | string {
    const user = this.registeredUsers.find(u => u.email === email);
    if (!user) {
      return 'Email not found';
    }
    if (user.password !== password) {
      return 'Password incorrect';
    }
    return true;
  }
  

  // login(email: string, password: string): string | null {
 
  //   const predefinedEmail = 'user@example.com';
  //   const predefinedPassword = 'password';

  //   if (email === predefinedEmail && password === predefinedPassword) {
  //     return null; 
  //   } else if (email !== predefinedEmail) {
  //     return 'Email not found'; 
  //   } else {
  //     return 'Password incorrect'; 
  //   }
  // }
}
