import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { Year1Component } from './year1/year1.component';
import { Cse1Component } from './year1/cse1/cse1.component';
import { Cse2Component } from './year1/cse2/cse2.component';
import { Ece1Component } from './year2/ece1/ece1.component';
import { Year2Component } from './year2/year2.component';
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


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'department',component:DepartmentComponent},
  {path:'year1',component:Year1Component},
  {path:'cse1',component:Cse1Component},
  {path:'cse2',component:Cse2Component},
  {path:'year2',component:Year2Component},
  {path:'ece1',component:Ece1Component},
  {path:'ece2',component:Ece2Component},
  {path:'year3',component:Year3Component},
  {path:'eee1',component:Eee1Component},
  {path:'eee2',component:Eee2Component},
  {path:'year4',component:Year4Component},
  {path:'civi1',component:Civi1Component},
  {path:'civi2',component:Civi2Component},
  {path:'year5',component:Year5Component},
  {path:'year6',component:Year6Component},
  {path:'year7',component:Year7Component},
  {path:'year8',component:Year8Component},
  {path:'csc1',component:Csc1Component},
  {path:'csc2',component:Csc2Component},
  {path:'pet1',component:Pet1Component},
  {path:'pet2',component:Pet2Component},
  {path:'mech1',component:Mech1Component},
  {path:'mech2',component:Mech2Component},
  {path:'csm1',component:Csm1Component},
  {path:'csm2',component:Csm2Component},
  {path:'tech',component:TechComponent},
  {path:'per',component:PerComponent},
  {path:'inno',component:InnoComponent},
  {path:'alu',component:AluComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
