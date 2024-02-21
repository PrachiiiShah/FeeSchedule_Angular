import { Component, OnInit } from '@angular/core';
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
    { abbreviation: 'AZ', name: 'Arizona' },
    { abbreviation: 'CA', name: 'California' }
  ];

  filteredStates: { abbreviation: string, name: string }[] = [];
  searchTerm: string = '';

  ngOnInit() {
    // Initialize filteredStates with all states
    this.filteredStates = [...this.states];
  }

  filterStates() {
    // Log the value of searchTerm before filtering
    console.log('Search term before filtering:', this.searchTerm);

    // Filter states based on the search term
    this.filteredStates = this.states.filter(state =>
      state.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Log the filtered states after filtering
    console.log('Filtered states:', this.filteredStates);
  
  

    console.log('Search term 2:', this.searchTerm);
    console.log('Filtered states:', this.filteredStates);
  }
  
 
}





