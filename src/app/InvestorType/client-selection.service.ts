import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientSelectionService {
  private selectedClientSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedClient$: Observable<string> = this.selectedClientSubject.asObservable();
  constructor() { }
  setSelectedClient(clientName: string) {
    this.selectedClientSubject.next(clientName);
  }
}
