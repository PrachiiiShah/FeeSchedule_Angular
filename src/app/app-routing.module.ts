import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeClosureComponent} from './fore-closure/fore-closure.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',component:HomeComponent},
   {path:'foreclosure', component:ForeClosureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
