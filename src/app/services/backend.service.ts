import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {alumnosModel} from '../model/alumnos.model';
import {map} from 'rxjs/operators';
import { cursosModel } from '../model/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = 'https://intranet-d8dc7-default-rtdb.firebaseio.com';

  constructor(private http:HttpClient) { }

  obteneralumnos(){
    return this.http.get(`${this.url}/alumnos.json`).pipe(map(this.crearArreglosUsuarios));
  }

  obteneralumno(rut: any){
    return this.http.get(`${this.url}/alumnos/${rut}.json`);

  }
  obtenerCursos(){
    return this.http.get(`${this.url}/Cursos.json`).pipe(map(this.crearArregloCursos));
  }

  private crearArreglosUsuarios(obj: any){
    const usuarios : alumnosModel [] = [];

    Object.keys(obj).forEach(key =>{
      const usuario :alumnosModel = obj[key];
      usuario.rut =key;
      usuarios.push(usuario);
      console.log(usuarios);
      console.log('holamundo')

    });
    console.log(usuarios);
    return usuarios;
  }
  private crearArregloCursos(obj:any){
    const cursos: cursosModel [] =[];
    Object.keys(obj).forEach(key =>{
      const curso:cursosModel = obj[key];
      curso.codigo=key;
      cursos.push(curso);
    });
    return cursos;
  }
   public añoActual(){
     let year = new Date();
      return  year.getFullYear();

   }



     }


