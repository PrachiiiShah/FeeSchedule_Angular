import { Component } from '@angular/core';
import { MilestoneService } from 'src/app/Services/milestone.service';
@Component({
  selector: 'app-mile-card',
  templateUrl: './mile-card.component.html',
  styleUrls: ['./mile-card.component.css']
})
export class MileCardComponent {
 
  milestones: any[] = [];
   constructor(private MilestoneService: MilestoneService) { }
   selectedMilestone(milestoneName:string){
      this.MilestoneService.setSelectedMilestone(milestoneName);
    
   }
     // clientName = this.clients[0].name;
     //  setClient(client) {
     //   this.clientName = client.name;
     // }
  
     ngOnInit(): void {
      this.loadMilestones();
     }
     loadMilestones(): void {
      this.MilestoneService.getMilestoneTypes().subscribe(
        (data: any[]) => {
          this.milestones = data;
        },
        (error) => {
          console.error('Error fetching milestones types:', error);
        }
      );
    }
    
}
