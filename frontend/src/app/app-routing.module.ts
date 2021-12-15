import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from './COMPONETES/modificar/modificar.component';
import { TareasComponent } from './COMPONETES/tareas/tareas.component';

const routes: Routes = [
  { path:'', redirectTo: '/inicio', pathMatch: 'full'},
  
  /* rutas*/
  { path:'inicio', component:TareasComponent},
  { path:'edit/:id', component:ModificarComponent},
  //{ path:'**', component:JuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
