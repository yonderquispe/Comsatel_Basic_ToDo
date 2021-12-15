import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../MODELOS/tarea.modelos';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

   //url de servidor API
   url = 'http://localhost:8080/api/tareas';

  constructor(private http: HttpClient) { }
  
  
  
   //-------------------------METODOS-----------------------------------
   geTareas():Observable<any>{
    return this.http.get(this.url);
  }

  getUnaTarea(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  addTarea(tarea:Tarea):Observable<any>
  {
    return this.http.post(this.url,tarea);
  }

  editTarea(tarea:Tarea, id:string):Observable<any>
  {
     return this.http.put(this.url+'/'+id, tarea);
  }

  deleteTarea(id:string):Observable<any>
  {
     return this.http.delete(this.url+'/'+id);
  }
}
