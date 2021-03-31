import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cursosModel } from 'src/app/model/cursos.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {
 form = new FormGroup({});
 cursos: cursosModel []=[];

  constructor( private fb:FormBuilder, private backen:BackendService) {

    this.crearFormulario();
   }

  ngOnInit(): void {

     let fecha = this.backen.añoActual();
    this.backen.obtenerCursos().subscribe( (data) =>{
    data=  data.filter(function(curso){
      return curso.year == fecha;

     })

     this.cursos= data;
    this.cursos.unshift({
      nombre: 'sin definir',
      codigo: '',
      year: 0

    });
    console.log(data);
    console.log(this.cursos);
    });


  }
   get nombreNoValido(){
     return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
   }
   get rutNoValido(){
     return this.form.get('rut')?.invalid && this.form.get('rut')?.touched;
   }
   get direccionNoValido(){
     return this.form.get('direccion')?.invalid && this.form.get('rut')?.touched;
   }


   crearFormulario(){
    this.form = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(5)]],
      rut: ['',[Validators.required]],
       curso: ['',[Validators.required]],
       direccion: ['',[Validators.required]]
      // correo: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]

   });
   }
  guardar(){
    console.log(this.form);
  }
}
