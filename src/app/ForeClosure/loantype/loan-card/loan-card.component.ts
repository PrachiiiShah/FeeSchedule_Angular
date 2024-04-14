import { Component } from '@angular/core';
// import { LoanService } from 'src/app/DilComponent/loan.service';
import { LoanService } from '../../Services/loan.service';
@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css']
})
export class LoanCardComponent {
  loans: any[] = [];
// loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:'USDA'},{name:'VA'}];

  constructor(private LoanService: LoanService) {}
  selectedLoan(loanName: string) {
    this.LoanService.setSelectedLoan(loanName);
  }
  ngOnInit(): void {
    this.loadLoans();
  }
  loadLoans(): void {
    this.LoanService.getLoanTypes().subscribe(
      (data: any[]) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching Loans types:', error);
      }
    );
  }
}
