import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { FinazasComponent } from './finazas/finazas.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FinazasComponent,
    PruebaComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
