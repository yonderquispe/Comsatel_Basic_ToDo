import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tarea } from 'src/app/MODELOS/tarea.modelos';
import { TareaService } from 'src/app/SERVICE/tarea.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.sass']
})
export class ModificarComponent implements OnInit {

  //variables
  id_seleccionado:string='';
  tareaActual: Tarea = { id: '', tarea: '', finalizado: false };
  
  constructor(
    private tareaService: TareaService,
    private activaterouter: ActivatedRoute,
    private router:Router) 
  {   }

  ngOnInit(): void {
    this.id_seleccionado = this.activaterouter.snapshot.params.id;
    this.obtenerTarea();
  }
  obtenerTarea()
  {
    this.tareaService.getUnaTarea(this.id_seleccionado).subscribe(
      res=>{
        this.tareaActual=res;
      },
      err => console.log(err)
    );
  }

  guardarCambio()
  {
    this.tareaService.editTarea(this.tareaActual,this.id_seleccionado).subscribe(
        res=>{
          this.router.navigate(['/inicio']);
        },
        err => console.log(err)
    );

  }

}
