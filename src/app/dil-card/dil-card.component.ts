import { Component } from '@angular/core';

@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.css']
})
export class DilCardComponent {
loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
constructor() { }
     ngOnInit(): void {
     }
    
}
