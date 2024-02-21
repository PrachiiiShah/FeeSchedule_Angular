import { Component } from '@angular/core';

@Component({
  selector: 'app-mile-stone',
  templateUrl: './mile-stone.component.html',
  styleUrls: ['./mile-stone.component.css']
})
export class MileStoneComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
