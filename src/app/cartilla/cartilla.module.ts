import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { VacunasComponent } from './pages/vacunas/vacunas.component';
import { DesparasitacionComponent } from './pages/desparasitacion/desparasitacion.component';
import { RevisionesComponent } from './pages/revisiones/revisiones.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../primeNG/prime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMascotaComponent } from './components/form-mascota/form-mascota.component';



@NgModule({
  declarations: [
    ClinicaComponent,
    MascotaComponent,
    PropietarioComponent,
    VacunasComponent,
    DesparasitacionComponent,
    RevisionesComponent,
    FormMascotaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeModule,
    ReactiveFormsModule
  ]
})
export class CartillaModule { }
