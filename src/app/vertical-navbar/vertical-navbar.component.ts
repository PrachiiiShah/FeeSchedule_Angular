import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent {
 
  isExpanded: boolean = false;

  menuItems = [
    { icon: 'bi bi-house-door-fill', name: 'Home' },
     { icon: 'bi bi-clock-history', name: 'History' },
    { icon: 'bi bi-box-arrow-left', name: 'Log Out' }
   
  ];
navigate(route:string){
  if(route=='Home'){
    window.location.href = '/';
  }
  if(route=='History'){
    window.location.href = '/history';
  }
  if(route=='Log Out'){
    window.location.href = '/login';
  }
}
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidebar() {
    this.isExpanded = true;
  }

  collapseSidebar() {
    this.isExpanded = false;
  }
 
  
}



