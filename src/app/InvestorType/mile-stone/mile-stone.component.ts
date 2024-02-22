import { Component } from '@angular/core';
import{ClientSelectionService} from 'src/app/InvestorType/client-selection.service';
import{LoanService} from 'src/app/DilComponent/loan.service';
import { InvestorService } from 'src/app/DilComponent/investor.service';
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
      selectedClient: string = '';

  constructor(private clientSelectionService: ClientSelectionService, private LoanService: LoanService,private InvestorService:InvestorService) { }
  selectedInvestor:string='';
  selectedLoan:string='';
  ngOnInit(): void {
    this.clientSelectionService.selectedClient$.subscribe(clientName => {
      this.selectedClient = clientName;
    });
    this.LoanService.selectedLoan$.subscribe(loanName=>{
      this.selectedLoan=loanName;
    });
    this.InvestorService.selectedInvestor$.subscribe(investorName => {
      this.selectedInvestor = investorName;
    });
  }
}
