import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeModule } from '../primeNG/prime.module';

import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginVeterinarioComponent } from './pages/login-veterinario/login-veterinario.component';
import { MascotaPerdidaComponent } from './pages/mascota-perdida/mascota-perdida.component';
import { RegistroVeterinarioComponent } from './pages/registro-veterinario/registro-veterinario.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BienvenidaComponent,
    LoginVeterinarioComponent,
    MascotaPerdidaComponent,
    RegistroVeterinarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeModule
  ]
})
export class LoginModule { }
