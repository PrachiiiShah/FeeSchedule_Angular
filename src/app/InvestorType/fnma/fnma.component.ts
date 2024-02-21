import { Component } from '@angular/core';

@Component({
  selector: 'app-fnma',
  templateUrl: './fnma.component.html',
  styleUrls: ['./fnma.component.css']
})
export class FnmaComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
