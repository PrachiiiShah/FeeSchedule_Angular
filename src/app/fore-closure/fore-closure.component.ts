import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarComponent} from '../bar/bar.component';



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
    { abbreviation: 'Az', name: 'Arizon' }, { abbreviation: 'CA', name: 'California' }, { abbreviation: 'AR', name: 'Arkansas' }, { abbreviation: 'AR', name: 'Arkansas' }, { abbreviation: 'AR', name: 'Arkansas' }, { abbreviation: 'AR', name: 'Arkansas' }, { abbreviation: 'AR', name: 'Arkansas' },
  ];

  filteredStates = [...this.states];
  searchTerm: string = '';
  ngOnInit() {
    this.filteredStates = [...this.states];
  }
  // filterStates() {
  //   if (this.searchTerm.trim() === '') {
  //     this.filteredStates = [...this.states];
  //   } else {
  //     this.filteredStates = this.states.filter(state =>
  //       state.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
      
  //     // If there's exactly one match, append it to the filteredStates array
  //     const exactMatch = this.states.find(state =>
  //       state.name.toLowerCase() === this.searchTerm.toLowerCase()
  //     );
  //     if (exactMatch && this.filteredStates.length === 0) {
  //       this.filteredStates.push(exactMatch);
  //     }
  //   }
   
     
    
  // }
  filterStates() {
    this.filteredStates = this.states.filter(state =>
      state.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filtered states:', this.filteredStates);
  }
  
  
}



