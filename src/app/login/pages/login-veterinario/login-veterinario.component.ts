import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent implements OnInit {

  formLogin: FormGroup;
  valor!: string;

  constructor( private loginService: LoginService, private formBuilder: FormBuilder, private router: Router ) { 
    //Creacion del formulario
    this.formLogin = this.formBuilder.group({
      correo: ['', [ Validators.email, Validators.required ]],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    const idVet = localStorage.getItem('idVet');
    if(idVet){
      this.loginService.idVeterinario = idVet;
    }
  }

  login(){

    this.loginService.iniciarSesion( this.formLogin.value ).subscribe(
      (res) => {
        
        // this.loginService.idVeterinario = res._id;
        this.loginService.veterinario = res;

        localStorage.setItem('idVet', res._id);
        
        this.router.navigate([`clinica/${res._id}`])
        this.loginService.refLogin.close();
      },
      (err) => {
        console.log(this.formLogin.value)

        console.log('ERROR: ', err)
      }
    )
    
  }

}
