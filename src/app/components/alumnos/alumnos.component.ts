import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { alumnosModel } from 'src/app/model/alumnos.model';
import { cursosModel } from 'src/app/model/cursos.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: []
})
export class AlumnosComponent implements OnInit {
 alumnos: alumnosModel[ ] = [];
 cursos: cursosModel []=[];
  constructor(private backend: BackendService, private route:Router) { }

  ngOnInit(): void {
    this.backend.obteneralumnos().subscribe( (data:any  )=>{
      this.alumnos = data;
     console.log(this.alumnos);
   });

  }
        // veralumno(rut:string){
        //   this.backend.obteneralumno(rut).subscribe( (data:any) =>{
        //     this.alumno = data;
        //     console.log(data);
        //   });

        // }
        verAlumno(rut: string){
          debugger;
        this.route.navigate( ['./alumno', rut]);
      }
       nuevoAlumno(){
         this.route.navigate(['./nuevoalumno']);
       }
}
