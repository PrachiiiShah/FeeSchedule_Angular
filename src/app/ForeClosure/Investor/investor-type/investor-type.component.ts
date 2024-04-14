import { Component } from '@angular/core';
// import { LoanService } from 'src/app/DilComponent/loan.service';
// import { LoanService } from '../../Services/loan.service';
import { LoanService } from '../../Services/loan.service';
import{ForeclosuretypeService} from '../../Services/foreclosuretype.service';
@Component({
  selector: 'app-investor-type',
  templateUrl: './investor-type.component.html',
  styleUrls: ['./investor-type.component.css']
})
export class InvestorTypeComponent {
  selectedForeclosuretype:string='';
  selectedLoan:string='';
  constructor(private ForeclosuretypeService: ForeclosuretypeService,private LoanService: LoanService){}
  ngOnInit():void{
    this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(foreclosureType=>{
      this.selectedForeclosuretype=foreclosureType;
    });
    this.LoanService.selectedLoan$.subscribe(loanName => {
      this.selectedLoan = loanName;
    });

  }

 
}
