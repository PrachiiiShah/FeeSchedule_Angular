import { Component } from '@angular/core';
import { StateService } from '../../Services/state.service';
import { ForeclosuretypeService } from '../Services/foreclosuretype.service';
@Component({
  selector: 'app-fore-card',
  templateUrl: './fore-card.component.html',
  styleUrls: ['./fore-card.component.css']
})
export class ForeCardComponent {
foretypes=[{name:'Judicial'},{name:'Non-Judicial'}];

constructor(private StateService: StateService, private ForeclosuretypeService:ForeclosuretypeService ) { }
selectForeClosure(foreclosuretypeName: string) {
  this.ForeclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
}
selectState(stateName: string) {
  this.StateService.setSelectedState(stateName);}
}
