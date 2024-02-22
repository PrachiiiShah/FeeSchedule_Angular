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

import { ConvCardComponent } from './DilComponent/conv-card/conv-card.component';
import { FnmaComponent } from './InvestorType/fnma/fnma.component';
import { ClientNameComponent } from './InvestorType/client-name/client-name.component';
import { MileStoneComponent } from './InvestorType/mile-stone/mile-stone.component';
import { MileCardComponent } from './InvestorType/mile-card/mile-card.component';
import { ForeTypeComponent } from './ForeClosure/fore-type/fore-type.component';
import { ForeCardComponent } from './ForeClosure/fore-card/fore-card.component';
import { LoanComponent } from './ForeClosure/loantype/loan/loan.component';
import { LoanCardComponent } from './ForeClosure/loantype/loan-card/loan-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     CardComponent,
    VerticalNavbarComponent,
     ForeClosureComponent,
    HomeComponent, BarComponent, DILComponent, DilCardComponent, ConvCardComponent, FnmaComponent, ClientNameComponent, ConventionalComponent,MileStoneComponent, MileCardComponent, ForeTypeComponent, ForeCardComponent, LoanComponent, LoanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
