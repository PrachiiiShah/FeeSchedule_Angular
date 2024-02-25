import { Component } from '@angular/core';
import { LoanService } from 'src/app/DilComponent/loan.service';
import { InvestorService } from 'src/app/DilComponent/investor.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
import { ClientSelectionService } from 'src/app/InvestorType/client-selection.service';
import { MilestoneService } from 'src/app/Services/milestone.service';

@Component({
  selector: 'app-for-result',
  templateUrl: './for-result.component.html',
  styleUrls: ['./for-result.component.css']
})
export class ForResultComponent {
  selectedForeclosuretype:string='';
  selectedLoan:string='';
  selectedInvestor:string='';
  selectedClient:string='';
  selectedMilestone:string='';
  constructor(private ForeclosuretypeService: ForeclosuretypeService,private LoanService: LoanService,private InvestorService:InvestorService,private clientSelectionService: ClientSelectionService, private MilestoneService:MilestoneService){}
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
    this.MilestoneService.selectedMilestone$.subscribe(milestoneName=>{
      this.selectedMilestone=milestoneName;
    });
  }
}
