import { Component } from '@angular/core';

@Component({
  selector: 'app-fh',
  templateUrl: './fh.component.html',
  styleUrls: ['./fh.component.css']
})
export class FhComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
