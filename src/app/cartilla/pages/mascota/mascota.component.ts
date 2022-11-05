import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartillaService } from '../../services/cartilla.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  mascota !: FormGroup;

  constructor( private fb: FormBuilder, private cartillaService:CartillaService, private activatedRoute: ActivatedRoute,
                private loginService:LoginService ) { 
    this.mascota = this.fb.group({
      nombreMascota: [''],
      expediente: [''],
      fechaMascota: [''],
      sexoMascota: [''],
      raza: [''],
      color: [''],
      descripcionMascota: [''],
      microchip: [''],
      animal: [''],
    })
  }

  ngOnInit(): void {
    
    //Observamos para actualizar cada que se cambie el id de la URL
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.cartillaService.getMascota( id ) )
    )
    .subscribe(
      (res) => {
        this.cartillaService.mascotaActiva = res;
        this.mascota.patchValue( this.cartillaService.mascotaActiva )
        console.log('VET', this.loginService.idVeterinario )
      }
    )

  }

}
