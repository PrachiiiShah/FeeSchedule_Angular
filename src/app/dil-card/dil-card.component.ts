import { Component } from '@angular/core';
import{LoanService} from 'src/app/DilComponent/loan.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dil-card',
  templateUrl: './dil-card.component.html',
  styleUrls: ['./dil-card.component.css']
})
export class DilCardComponent {
loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
constructor(private LoanService: LoanService,private http: HttpClient) { }
private selectedLoanSubject: BehaviorSubject<string> =
  new BehaviorSubject<string>('');
selectedLoan$: Observable<string> = this.selectedLoanSubject.asObservable();
setSelectedLoan(loanName: string) {
  this.selectedLoanSubject.next(loanName);
}
private apiUrl =
  'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

 

  // getLoanTypes(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  // fetchLoanTypes(): Observable<any> {
    
  //   const token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzExMTU2MTgwfQ.-N2vYWIbDNeOEQ1bxhou1wFLBR63m-LwjgW-NzmjUmg      ';
    
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });

    
  //   return this.http.get(this.apiUrl, { headers });
  // }

// setSelectedLoan(loanName: string) {
//   this.LoanService. setSelectedLoan(loanName);
// }
     ngOnInit(): void {
     }
    
}
