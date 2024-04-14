import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
private selectedMilestoneSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
public selectedMilestone$: Observable<string>= this.selectedMilestoneSubject.asObservable();
  
  setSelectedMilestone(milestoneName: string) {
    this.selectedMilestoneSubject.next(milestoneName);
  }
  private apiUrl =
    'https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/foreclosure/milestones?state_id=28&foreclosure_type_id=1&loan_type_id=1&investor_type_id=2&client_id=58';

  constructor(private http: HttpClient) {}

  getMilestoneTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
