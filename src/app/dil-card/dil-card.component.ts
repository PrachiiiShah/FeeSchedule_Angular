import { Component } from '@angular/core';
import{LoanService} from 'src/app/DilComponent/loan.service';
@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.css']
})
export class DilCardComponent {
loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
constructor(private LoanService: LoanService) { }

selectLoan(loanName: string) {
  this.LoanService. setSelectedLoan(loanName);
}
     ngOnInit(): void {
     }
    
}
