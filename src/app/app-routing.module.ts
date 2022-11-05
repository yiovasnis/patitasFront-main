import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './login/pages/bienvenida/bienvenida.component';
import { LoginVeterinarioComponent } from './login/pages/login-veterinario/login-veterinario.component';
import { MascotaPerdidaComponent } from './login/pages/mascota-perdida/mascota-perdida.component';
import { RegistroVeterinarioComponent } from './login/pages/registro-veterinario/registro-veterinario.component';
import { EscanearQrComponent } from './scanner/pages/escanear-qr/escanear-qr.component';
import { MostrarQrComponent } from './scanner/pages/mostrar-qr/mostrar-qr.component';
import { ClinicaComponent } from './cartilla/pages/clinica/clinica.component';
import { MascotaComponent } from './cartilla/pages/mascota/mascota.component';
import { PropietarioComponent } from './cartilla/pages/propietario/propietario.component';
import { VacunasComponent } from './cartilla/pages/vacunas/vacunas.component';
import { DesparasitacionComponent } from './cartilla/pages/desparasitacion/desparasitacion.component';
import { RevisionesComponent } from './cartilla/pages/revisiones/revisiones.component';
import { RecuperarQrComponent } from './scanner/pages/recuperar-qr/recuperar-qr.component';

const routes: Routes = [
  /**Rutas de bienvenida, login y registro */
  {
    path: '',
    component: BienvenidaComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroVeterinarioComponent
  },
  { //TODO: verificar como hacer el registro y una pantalla para el perfil del veterinario
    path: 'registro/mascota',
    component: MascotaComponent
  },
  {
    path: 'login',
    component: LoginVeterinarioComponent
  },
  {
    path: 'mascota-perdida',
    component: MascotaPerdidaComponent
  },
  {
    path: 'scanner',
    component: EscanearQrComponent
  },
  {
    path: 'scanner/mostrar',
    component: MostrarQrComponent
  },
  {
    path: 'scanner/recuperar',
    component: RecuperarQrComponent
  },
  {
    path: 'clinica/:id',
    component: ClinicaComponent
  },
  {
    path: 'mascota/:id',
    component: MascotaComponent
  },
  {
    path: 'propietario/:id',
    component: PropietarioComponent
  },
  {
    path: 'vacunacion/:id',
    component: VacunasComponent
  },
  {
    path: 'desparasitacion/:id',
    component: DesparasitacionComponent
  },
  {
    path: 'revisiones/:id',
    component: RevisionesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
