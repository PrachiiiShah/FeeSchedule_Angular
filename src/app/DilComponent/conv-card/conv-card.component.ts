import { Component } from '@angular/core';
import { InvestorService } from '../investor.service';
@Component({
  selector: 'app-conv-card',
  templateUrl: './conv-card.component.html',
  styleUrls: ['./conv-card.component.css']
})
export class ConvCardComponent {
// investors=[{name:'FNMA'},{name:'FHLMC'},{name:'Other'},{name:'None'}];
investors: any[] = [];
constructor(private investorService: InvestorService) { }
selectInvestor(investorName: string) {
  this.investorService.setSelectedInvestor(investorName);
}
ngOnInit(): void {
  this.loadInvestors();
}
loadInvestors(): void {
  this.investorService.getInvestorTypes().subscribe(
    (data: any[]) => {
      this.investors = data;
    },
    (error) => {
      console.error('Error fetching investors types:', error);
    }
  );
  
}
}