import { Component } from '@angular/core';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { LoanService } from 'src/app/DilComponent/loan.service';
import { InvestorService } from 'src/app/DilComponent/investor.service';
@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.css']
})
export class ClientTypeComponent {
  selectedForeclosuretype:string='';
  selectedLoan:string='';
  selectedInvestor:string='';
  constructor(private ForeclosuretypeService: ForeclosuretypeService,private LoanService: LoanService,private InvestorService:InvestorService){}
  ngOnInit():void{
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(foreclosureType=>{
      this.selectedForeclosuretype=foreclosureType;
    });
    this.LoanService.selectedLoan$.subscribe(loanName => {
      this.selectedLoan = loanName;
    });
    this.InvestorService.selectedInvestor$.subscribe(investorName => {
      this.selectedInvestor = investorName;
    });
  
}
}
