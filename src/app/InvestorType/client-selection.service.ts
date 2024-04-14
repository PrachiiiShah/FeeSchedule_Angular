import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientSelectionService {
  private selectedClientSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedClient$: Observable<string> = this.selectedClientSubject.asObservable();
  
  setSelectedClient(clientName: string) {
    this.selectedClientSubject.next(clientName);
  }
  private apiUrl='https://beta-feeschedule.outamationlabs.com/api/v1/fee-schedule/dil/clients?loan_type_id=2&investor_type_id=2';

  constructor(private http: HttpClient) { }
  getClientTypes():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
