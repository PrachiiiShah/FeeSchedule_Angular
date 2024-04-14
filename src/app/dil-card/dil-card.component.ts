import { Component,OnInit } from '@angular/core';
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
export class DilCardComponent implements
  OnInit {
    loans : any[] = [];
  
    constructor(private loanService: LoanService) { }
  
    ngOnInit(): void {
      this.loadLoans();
    }
  
    loadLoans(): void {
      this.loanService.getLoanTypes().subscribe(
        (data: any[]) => {
          // console.log("Are Pan");
          this.loans = data;
        },
        (error) => {
          console.log("Be Yarr");
          console.error('Error fetching loan types:', error);
        }
      );
    }
  
    selectLoan(loanName: string): void {
      this.loanService.setSelectedLoan(loanName);
      console.log('Selected loan:', loanName);
    }
  }
// loans=[{name:'Conventional Insured/PMI'},{name:'FHA'},{name:"USDA"},{name:'VA'}];
// loans : any[] = [];
// constructor(private LoanService: LoanService,private http: HttpClient) { }
// private selectedLoanSubject: BehaviorSubject<string> =
//   new BehaviorSubject<string>('');
// selectedLoan$: Observable<string> = this.selectedLoanSubject.asObservable();
// ngOnInit(): void {
//   this.loadLoans();
// }

// loadLoans(): void {
//   this.loanService.getLoanTypes().subscribe(
//     (data: any[]) => {
//       // console.log("Are Pan");
//       this.loans = data;
//     },
//     (error) => {
//       console.log("Be Yarr");
//       console.error('Error fetching loan types:', error);
//     }
//   );
// setSelectedLoan(loanName: string) {
//   this.selectedLoanSubject.next(loanName);
// }
// // private apiUrl =
// //   'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/loan-types';

 

//   // getLoanTypes(): Observable<any[]> {
//   //   return this.http.get<any[]>(this.apiUrl);
//   // }
//   // fetchLoanTypes(): Observable<any> {
    
//   //   const token =
//   //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzExMTU2MTgwfQ.-N2vYWIbDNeOEQ1bxhou1wFLBR63m-LwjgW-NzmjUmg      ';
    
//   //   const headers = new HttpHeaders({
//   //     Authorization: `Bearer ${token}`,
//   //   });

    
//   //   return this.http.get(this.apiUrl, { headers });
//   // }

// // setSelectedLoan(loanName: string) {
// //   this.LoanService. setSelectedLoan(loanName);
// // }
//      ngOnInit(): void {
//      }
    
// }
