import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alumnosModel } from 'src/app/model/alumnos.model';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  alumno: alumnosModel = new alumnosModel ;
  constructor(private route:ActivatedRoute, private backen:BackendService) {

    // this.route.params.subscribe( params =>{
    //  this.alumno = this.backen.obteneralumno(params.rut);
    //  console.log(params);
    //  console.log(this.alumno)
    //  const data:alumnosModel = this.alumno;
    //  console.log(data);
    // });
    let rut: any = this.route.snapshot.paramMap.get('rut');
    console.log(rut);
    this.backen.obteneralumno(rut).subscribe( (resp: any ) =>{
      this.alumno = resp;
      this.alumno.rut = rut
    });

  }

  ngOnInit(): void {

  }

}
