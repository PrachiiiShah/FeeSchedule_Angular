import { Component } from '@angular/core';

@Component({
  selector: 'app-mile-card',
  templateUrl: './mile-card.component.html',
  styleUrls: ['./mile-card.component.css']
})
export class MileCardComponent {
  milestones=[{name:'Closes Prior to Completion'},
    {name:'DIL Completed'}];
   
     // clientName = this.clients[0].name;
     //  setClient(client) {
     //   this.clientName = client.name;
     // }
     constructor() { }
     ngOnInit(): void {
     }
    
}
