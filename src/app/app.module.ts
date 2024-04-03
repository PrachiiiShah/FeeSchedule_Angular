import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { ForeClosureComponent } from './fore-closure/fore-closure.component';
import { HomeComponent } from './home/home.component';
//import { ForeClosureModuleModule } from './fore-closure-module/fore-closure-module.module';
import { BarComponent } from './bar/bar.component';
import { DILComponent } from './dil/dil.component';
import { DilCardComponent } from './dil-card/dil-card.component';


import { ConventionalComponent } from './DilComponent/conventional/conventional.component';
import { RouterModule, Routes } from '@angular/router';
import { ConvCardComponent } from './DilComponent/conv-card/conv-card.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { ClientNameComponent } from './InvestorType/client-name/client-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
import { MileCardComponent } from './InvestorType/mile-card/mile-card.component';
import { ForeTypeComponent } from './ForeClosure/fore-type/fore-type.component';
import { ForeCardComponent } from './ForeClosure/fore-card/fore-card.component';
import { LoanComponent } from './ForeClosure/loantype/loan/loan.component';
import { LoanCardComponent } from './ForeClosure/loantype/loan-card/loan-card.component';

import { InvestorCardComponent } from './ForeClosure/Investor/investor-card/investor-card.component';
import { InvestorTypeComponent } from './ForeClosure/Investor/investor-type/investor-type.component';
import { ClientCardComponent } from './ForeClosure/Client/client-card/client-card.component';
import { ClientTypeComponent } from './ForeClosure/Client/client-type/client-type.component';
import { MilestoneCardComponent } from './ForeClosure/MileStone/milestone-card/milestone-card.component';
import { MilestoneTypeComponent } from './ForeClosure/MileStone/milestone-type/milestone-type.component';
import { DilResultComponent } from './Result/dil-result/dil-result.component';
import { ResultCardComponent } from './Result/result-card/result-card.component';
import { ForResultComponent } from './ForeClosure/for-result/for-result.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './Registration/auth.service';
import { RegComponent } from './Registration/reg/reg.component';
import { LoginComponent } from './Login/login/login.component';
import { HistoryComponent } from './User/history/history.component';
import { ForeEditComponent } from './Edit/fore-edit/fore-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     CardComponent,
    VerticalNavbarComponent,
     ForeClosureComponent,
    HomeComponent, BarComponent, DILComponent, DilCardComponent, ConvCardComponent, FnmaComponent, ClientNameComponent, ConventionalComponent,MileStoneComponent, MileCardComponent, ForeTypeComponent, ForeCardComponent, LoanComponent, LoanCardComponent,InvestorCardComponent,InvestorTypeComponent, ClientCardComponent, ClientTypeComponent, MilestoneCardComponent, MilestoneTypeComponent, DilResultComponent, ResultCardComponent, ForResultComponent, RegComponent, LoginComponent, HistoryComponent, ForeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
