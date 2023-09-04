import { Component } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas:persona[] = [
    {nombre: 'yeison', edad: 32},
    {nombre: 'hector', edad: 38},
    {nombre: 'mauricio', edad: 60},
    {nombre: 'sebastian', edad: 28}
  ];


}
