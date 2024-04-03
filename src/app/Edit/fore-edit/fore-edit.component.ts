import { Component,OnInit } from '@angular/core';
interface State {
  name: string;
  abbreviation: string;
}
@Component({
  selector: 'app-fore-edit',
  templateUrl: './fore-edit.component.html',
  styleUrls: ['./fore-edit.component.css']
})
export class ForeEditComponent {
  states: State[] = [
    { name: 'California', abbreviation: 'CA' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'New York', abbreviation: 'NY' },
    // Add more states as needed
  ];

  selectedState: State | null = null;

  constructor() { }

  ngOnInit(): void { }

  onStateChange(state: State) {
    this.selectedState = state;
  }
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
}
