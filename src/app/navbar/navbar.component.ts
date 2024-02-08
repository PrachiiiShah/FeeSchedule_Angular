import { Component,Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
  //   if (document.fullscreenElement) {
  //     this.exitFullScreen();
  //   } else {
  //     this.enterFullScreen();
  //   }
  // }

  // enterFullScreen() {
  //   const element = this.el.nativeElement;
  //   if (element.requestFullscreen) {
  //     element.requestFullscreen();
  //   } else if (element.webkitRequestFullscreen) {
  //     element.webkitRequestFullscreen();
  //   } else if (element.msRequestFullscreen) {
  //     element.msRequestFullscreen();
  //   }
  // }

  // exitFullScreen() {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }
}
 





