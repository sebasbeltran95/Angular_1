import { Component } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-finazas',
  templateUrl: './finazas.component.html',
  styleUrls: ['./finazas.component.css']
})
export class FinazasComponent {
  nombre:any = 'pepito perez';
  persona:persona = {
    nombre: 'prueba',
    edad: 30
  }

  numero:number = 1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }

}
