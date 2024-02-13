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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     CardComponent,
    VerticalNavbarComponent,
     ForeClosureComponent,
    HomeComponent, BarComponent
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
