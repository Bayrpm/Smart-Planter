import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  FormularioRegistro: FormGroup;
  constructor(public fb : FormBuilder) { 
    this.FormularioRegistro=this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'gmail' : new FormControl("", Validators.required),
      'contrasenia' : new FormControl("", Validators.required),
      'concontra' : new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

}
