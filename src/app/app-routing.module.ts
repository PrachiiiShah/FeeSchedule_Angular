import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeClosureComponent } from './fore-closure/fore-closure.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DILComponent } from './dil/dil.component';
import { ConventionalComponent } from './DilComponent/conventional/conventional.component';
import { LoanComponent } from './ForeClosure/loantype/loan/loan.component';
import { ForeTypeComponent } from './ForeClosure/fore-type/fore-type.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
import { InvestorTypeComponent } from './ForeClosure/Investor/investor-type/investor-type.component';
import { ClientTypeComponent } from './ForeClosure/Client/client-type/client-type.component';
import { MilestoneTypeComponent } from './ForeClosure/MileStone/milestone-type/milestone-type.component';
import { DilResultComponent } from './Result/dil-result/dil-result.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import{LoginComponent} from './Login/login/login.component';
import { RegComponent } from './Registration/reg/reg.component';
import { HistoryComponent } from './User/history/history.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'foreclosure', component: ForeClosureComponent },
  { path: 'dil', component: DILComponent },
  {path: 'conventional', component: ConventionalComponent},
 {path:'foreclosuretype',component:ForeTypeComponent},{path:'loan',component:LoanComponent},
  {path:'fnma',component:FnmaComponent},
  {path:'milestone',component:MileStoneComponent},{path:'investor',component:InvestorTypeComponent},{path:'client',component:ClientTypeComponent},{path:'foremile',component:MilestoneTypeComponent},{path:'dil-result',component:DilResultComponent},{path:'fore-result',component:ForResultComponent},{path:'registration',component:RegComponent},{path:'login',component:LoginComponent},{path:'history',component:HistoryComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
