import { Component } from '@angular/core';

@Component({
  selector: 'app-conventional',
  templateUrl: './conventional.component.html',
  styleUrls: ['./conventional.component.css']
})
export class ConventionalComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
