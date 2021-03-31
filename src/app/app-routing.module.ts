import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ApoderadosComponent } from './components/apoderados/apoderados.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


const routes: Routes = [
  { path:'alumnos' , component:AlumnosComponent},
  {path: 'alumno/:rut', component:TarjetaComponent},
  {path: 'nuevoalumno', component:FormularioAlumnoComponent},
  {path: 'home', component:HomeComponent},
  { path: 'apoderados' , component:ApoderadosComponent},
  {path: 'asignaturas' , component:AsignaturasComponent},
  {path: 'curso' , component:CursosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
