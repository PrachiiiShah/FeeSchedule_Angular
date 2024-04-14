import { Component } from '@angular/core';
import { MilestoneService } from 'src/app/Services/milestone.service';
@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.css']
})
export class MilestoneCardComponent {
  milestones: any[] = [];
  // milestones=[{name:'Title Requested'},
  // {name:'Title Reviewed'},{name:"Complain Filed"},{name:"Service Started"},{name:"Service Completed"},{name:'Affidavit Prepared'},{name:'Judgment to Court'},{name:'Bid Review'},{name:'Foreclosure Sale Held'}];
  constructor(private MilestoneService: MilestoneService) { }
   selectedMilestone(milestoneName:string){
      this.MilestoneService.setSelectedMilestone(milestoneName);

   }
   ngOnInit(): void {
    this.loadInvestor();
   }
   loadInvestor(): void {
    this.MilestoneService.getMilestoneTypes().subscribe(
      (data: any[]) => {
        this.milestones = data;
      },
      (error) => {
        console.error('Error fetching Clients types:', error);
      }
    );
  }
}
