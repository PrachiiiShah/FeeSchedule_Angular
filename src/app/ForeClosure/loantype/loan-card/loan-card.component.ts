import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css']
})
export class LoanCardComponent {
loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:'USDA'},{name:'VA'}];
}
