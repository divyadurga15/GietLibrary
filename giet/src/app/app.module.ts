import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './login/nav/nav.component';

import { ModelsComponent } from './models/models.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Banner1Component } from './banner1/banner1.component';

import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { Nav1Component } from './nav1/nav1.component';
import { Year1Component } from './year1/year1.component';
import { Cse1Component } from './year1/cse1/cse1.component';
import { Cse2Component } from './year1/cse2/cse2.component';
import { FooterComponent } from './footer/footer.component';
import { SubBannerComponent } from './banner/sub-banner/sub-banner.component';
import { Year2Component } from './year2/year2.component';
import { Ece1Component } from './year2/ece1/ece1.component';
import { Ece2Component } from './year2/ece2/ece2.component';
import { Year3Component } from './year3/year3.component';
import { Eee1Component } from './year3/eee1/eee1.component';
import { Eee2Component } from './year3/eee2/eee2.component';
import { Year4Component } from './year4/year4.component';
import { Civi1Component } from './year4/civi1/civi1.component';
import { Civi2Component } from './year4/civi2/civi2.component';
import { Year5Component } from './year5/year5.component';
import { Year6Component } from './year6/year6.component';
import { Year7Component } from './year7/year7.component';
import { Year8Component } from './year8/year8.component';
import { Csc1Component } from './year5/csc1/csc1.component';
import { Csc2Component } from './year5/csc2/csc2.component';
import { Pet1Component } from './year6/pet1/pet1.component';
import { Pet2Component } from './year6/pet2/pet2.component';
import { Mech1Component } from './year7/mech1/mech1.component';
import { Mech2Component } from './year7/mech2/mech2.component';
import { Csm1Component } from './year8/csm1/csm1.component';
import { Csm2Component } from './year8/csm2/csm2.component';
import { TechComponent } from './student/tech/tech.component';
import { PerComponent } from './student/per/per.component';
import { InnoComponent } from './student/inno/inno.component';
import { AluComponent } from './student/alu/alu.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    WelcomeComponent,
    LoginComponent,
    NavComponent,
    
    ModelsComponent,
         SignupComponent,
         AboutComponent,
         HomeComponent,
         Banner1Component,
         StudentComponent,
         DepartmentComponent,
         Nav1Component,
         Year1Component,
         Cse1Component,
         Cse2Component,
         FooterComponent,
         SubBannerComponent,
         Year2Component,
         Ece1Component,
         Ece2Component,
         Year3Component,
         Eee1Component,
         Eee2Component,
         Year4Component,
         Civi1Component,
         Civi2Component,
         Year5Component,
         Year6Component,
         Year7Component,
         Year8Component,
         Csc1Component,
         Csc2Component,
         Pet1Component,
         Pet2Component,
         Mech1Component,
         Mech2Component,
         Csm1Component,
         Csm2Component,
         TechComponent,
         PerComponent,
         InnoComponent,
         AluComponent,
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
