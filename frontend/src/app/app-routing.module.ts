import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './COMPONETES/tareas/tareas.component';

const routes: Routes = [
  { path:'', redirectTo: '/inicio', pathMatch: 'full'},
  
  /* rutas*/
  { path:'inicio', component:TareasComponent},
  //{ path:'**', component:JuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
