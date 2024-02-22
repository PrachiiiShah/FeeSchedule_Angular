import { Component } from '@angular/core';
import { LoanService } from 'src/app/DilComponent/loan.service';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
import { InvestorService } from 'src/app/DilComponent/investor.service';
import { ClientSelectionService } from 'src/app/InvestorType/client-selection.service';
@Component({
  selector: 'app-milestone-type',
  templateUrl: './milestone-type.component.html',
  styleUrls: ['./milestone-type.component.css']
})
export class MilestoneTypeComponent {
  selectedForeclosuretype:string='';
  selectedLoan:string='';
  selectedInvestor:string='';
  selectedClient:string='';
  constructor(private ForeclosuretypeService: ForeclosuretypeService,private LoanService: LoanService,private InvestorService:InvestorService,private clientSelectionService: ClientSelectionService){}
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
    this.clientSelectionService.selectedClient$.subscribe(clientName => {
      this.selectedClient = clientName;
    });
  }
}
