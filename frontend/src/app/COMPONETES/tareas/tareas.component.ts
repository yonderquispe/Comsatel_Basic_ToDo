import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/MODELOS/tarea.modelos';
import { TareaService } from 'src/app/SERVICE/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.sass']
})
export class TareasComponent implements OnInit {

  //variables
  tareaNuemva: Tarea = { id: '', tarea: '', finalizado: false };
  ListaTareas: any = [];
  constructor(private tareaService: TareaService) {

  }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.tareaService.geTareas().subscribe(
      res => {
        this.ListaTareas = <any>res;
      },
      err => console.log(err)
    );
  }

  agregar() {
    this.tareaService.addTarea(this.tareaNuemva).subscribe(
      res => {
        this.limpiarTarea();
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }


  eliminar(id: string) {
    let resultado = window.confirm('Eliminar Item');
    if (resultado === true) {
      this.tareaService.deleteTarea(id).subscribe(
        res => {
          this.limpiarTarea();
          this.ngOnInit();
        },
        err => console.log(err)
      );
    }
  }


  checkear(t: Tarea) {
    let estado = false;
    if (!t.finalizado) {
      estado = true
    }
    let id1: string = t.id as string;
    t.finalizado = estado;
    console.log(t);

    this.tareaService.editTarea(t, id1).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  limpiarTarea() {
    this.tareaNuemva = { id: '', tarea: '', finalizado: false };
  }

}
