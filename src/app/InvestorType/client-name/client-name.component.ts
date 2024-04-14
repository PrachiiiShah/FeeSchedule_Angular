import { Component } from '@angular/core';
import{ClientSelectionService} from 'src/app/InvestorType/client-selection.service';
@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.css']
})
export class ClientNameComponent {
// clients=[
//  {name:'Bank of America'},{
// name:'Caliber'},{name:'Carrington'},{name:"Champion"},{name:"Chase"},{name:'Community Loan Servicing'},{name:'M&T Bank'},{name:'PennyMac'},{name:'US Bank'},{name:'RoundPoint'},{name:'Selene'}];
clients: any[] = [];
constructor(private clientSelectionService: ClientSelectionService) { }

selectClient(clientName: string) {
  this.clientSelectionService.setSelectedClient(clientName);
}
 
  ngOnInit(): void {
    this.loadClients();
  }
  loadClients(): void {
    this.clientSelectionService.getClientTypes().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching client types:', error);
      }
    );
  }

}
