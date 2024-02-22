import { Component } from '@angular/core';

@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.css']
})
export class MilestoneCardComponent {
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
