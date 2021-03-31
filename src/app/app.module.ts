import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ApoderadosComponent } from './components/apoderados/apoderados.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ApoderadosComponent,
    AsignaturasComponent,
    CursosComponent,
    TarjetaComponent,
    NavbarComponent,
    HomeComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
