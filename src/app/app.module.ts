import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MisclasesComponent } from './components/misclases/misclases.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarinicioComponent } from './components/navbarinicio/navbarinicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbaradminComponent } from './components/navbaradmin/navbaradmin.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { ClassComponent } from './components/class/class.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MisclasesComponent,
    InicioComponent,
    NavbarinicioComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbaradminComponent,
    InstructoresComponent,
    ClassComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
