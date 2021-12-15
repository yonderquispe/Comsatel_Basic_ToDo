import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './COMPONETES/tareas/tareas.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModificarComponent } from './COMPONETES/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ModificarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
