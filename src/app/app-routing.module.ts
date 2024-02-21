import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeClosureComponent } from './fore-closure/fore-closure.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DILComponent } from './dil/dil.component';
import { ConventionalComponent } from './DilComponent/conventional/conventional.component';
import { USDAComponent } from './DilComponent/usda/usda.component';
import { VAComponent } from './DilComponent/va/va.component';
import { FhComponent } from './DilComponent/fh/fh.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'foreclosure', component: ForeClosureComponent },
  { path: 'dil', component: DILComponent },
  {path: 'conventional', component: ConventionalComponent},
  { path: 'usda', component: USDAComponent },
  { path: 'va', component: VAComponent },
  { path: 'fh', component: FhComponent },
  {path:'fnma',component:FnmaComponent},
  {path:'milestone',component:MileStoneComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
