import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MisclasesComponent} from './components/misclases/misclases.component';
import { InicioComponent }from './components/inicio/inicio.component';
import{ LoginComponent }from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { ClassComponent } from './components/class/class.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'misclases', component: MisclasesComponent},
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'instructores', component: InstructoresComponent},
  {path: 'class', component: ClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
