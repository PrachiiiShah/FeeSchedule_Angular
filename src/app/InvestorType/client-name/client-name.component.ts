import { Component } from '@angular/core';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.css']
})
export class ClientNameComponent {
clients=[
 {name:'Bank of America'},{
name:'Caliber'},{name:'Carrington'},{name:"Champion"},{name:"Chase"},{name:'Community Loan Servicing'},{name:'M&T Bank'},{name:'PennyMac'},{name:'US Bank'},{name:'RoundPoint'},{name:'Selene'}];

  // clientName = this.clients[0].name;
  //  setClient(client) {
  //   this.clientName = client.name;
  // }
  constructor() { }
  ngOnInit(): void {
  }
 

}
