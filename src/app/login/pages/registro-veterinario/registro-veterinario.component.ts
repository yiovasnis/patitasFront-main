import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro-veterinario',
  templateUrl: './registro-veterinario.component.html',
  styleUrls: ['./registro-veterinario.component.css']
})
export class RegistroVeterinarioComponent implements OnInit {

  formularioRegistro: FormGroup;

  display: boolean = false;
  display2: boolean = false;


  constructor( private formBuilder: FormBuilder, private loginService: LoginService, private router: Router ) { 

    this.formularioRegistro = this.formBuilder.group({
      clinica: [''],
      nombreMedico: [''],
      cedula: ['', Validators.required ],
      direccion: [''],
      telefono: [''],
      correo: ['', [ Validators.required, Validators.email ] ],
      password: ['', Validators.required ]
      
    })
   }

  ngOnInit(): void {
  }

  registrar() {
    console.log('mandar soli')
    this.loginService.registrarUsuario( this.formularioRegistro.value ).subscribe(
      (res) => {
        this.display = true;
      },
      (err) => {
        this.display2 = true;
      }
    )
    
  }

  aceptar() {
    this.display = false;
    this.router.navigate(['/'])
  }

}
