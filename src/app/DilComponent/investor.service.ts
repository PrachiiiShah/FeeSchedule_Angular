import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvestorService {
private selectedInvestorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
selectedInvestor$: Observable<string> = this.selectedInvestorSubject.asObservable();
 
  setSelectedInvestor(investorName: string) {
    this.selectedInvestorSubject.next(investorName);
  }
  private apiUrl =
  'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/investor-types?loan_type_id=1';

constructor(private http: HttpClient) {}

getInvestorTypes(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
fetchInvestorTypes(): Observable<any> {
  // Assuming you need to include an authorization token
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZXBpbnBvbmtpeWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwibmFtZSI6IkhlcGluIFBvbmtpeWEiLCJpZCI6NywiZXhwIjoxNzEyMDc5OTI4fQ.SfcOkcbGYdPeOmuURGU4x9lPh54kFb9hLmT-dOWnpfk';

  // Set up the headers with the authorization token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  // Make the HTTP request with the authorization headers
  return this.http.get(this.apiUrl, { headers });
}
}
