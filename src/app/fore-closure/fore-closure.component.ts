import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarComponent} from '../bar/bar.component';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-fore-closure',
  templateUrl: './fore-closure.component.html',
  styleUrls: ['./fore-closure.component.css']
})

export class ForeClosureComponent {
  states = [
    { abbreviation: 'AK', name: 'Alaska' },
    { abbreviation: 'AL', name: 'Alabama' },
    { abbreviation: 'AR', name: 'Arkansas' },
    { abbreviation: 'AZ', name: 'Arizona' },
    { abbreviation: 'CA', name: 'California' }
  ];

  // filteredStates: { abbreviation: string, name: string }[] = [];
  // searchTerm: string = '';

  // ngOnInit() {
  //   this.filteredStates = [...this.states];
  // }
  constructor(private StateService: StateService) { }
  selectState(stateName: string) {
    this.StateService.setSelectedState(stateName);
  }
  // filterStates() {
  
  //   console.log('Search term before filtering:', this.searchTerm);

   
  //   this.filteredStates = this.states.filter(state =>
  //     state.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );


  //   console.log('Filtered states:', this.filteredStates);
  
  

  //   console.log('Search term 2:', this.searchTerm);
  //   console.log('Filtered states:', this.filteredStates);
  // }
  ngOnInit(): void {
  }
 
}





