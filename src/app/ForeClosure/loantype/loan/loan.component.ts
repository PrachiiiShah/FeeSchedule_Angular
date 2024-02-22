import { Component } from '@angular/core';
import { ForeclosuretypeService } from '../../Services/foreclosuretype.service';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  selectedForeclosuretype:string='';
constructor(private ForeclosuretypeService: ForeclosuretypeService){}
ngOnInit():void{
  this.ForeclosuretypeService.selectedForeclosuretype$.subscribe(foreclosureType=>{
    this.selectedForeclosuretype=foreclosureType;
  });
}
}
