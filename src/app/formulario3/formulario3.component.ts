import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

// --------------------------------------------------------------------------------- 

// definir un geter 
  // get name(){
  //   return this.formUser.get('name');
  // }
  // get email(){
  //   return this.formUser.get('email');
  // }
// --------------------------------------------------------------------------------- 
  // definir un geter 
  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }

// --------------------------------------------------------------------------------- 

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email':new FormControl('',[Validators.required, Validators.email])
  });
// --------------------------------------------------------------------------------- 


// --------------------------------------------------------------------------------- 
  // name = new FormControl('sebastian');
  // email = new FormControl('sebastian@hotmail.com');
  // name = new FormControl('', Validators.required);
  // email = new FormControl('',[Validators.required, Validators.email]);
// --------------------------------------------------------------------------------- 
  
}
