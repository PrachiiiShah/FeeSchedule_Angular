import { Component } from '@angular/core';
import { VerticalNavbarComponent } from '../vertical-navbar/vertical-navbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
