import { Component } from '@angular/core';
import{LoanService} from 'src/app/DilComponent/loan.service';
@Component({
  selector: 'app-conventional',
  templateUrl: './conventional.component.html',
  styleUrls: ['./conventional.component.css']
})
export class ConventionalComponent {
  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); // 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }}}
      selectedLoan:string='';
  constructor(private LoanService: LoanService) { }
  ngOnInit():void{
    this.LoanService.selectedLoan$.subscribe(loanName=>{
      this.selectedLoan=loanName;
    });
  }
}
