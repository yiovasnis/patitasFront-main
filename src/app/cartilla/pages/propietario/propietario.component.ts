import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartillaService } from '../../services/cartilla.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {
  
  propietario: FormGroup;

  constructor( private fb: FormBuilder, private cartillaService:CartillaService ) {
    this.propietario = this.fb.group({
      nombrePropietario: [''],
      direccion: [''],
      telefono: [''],
      correo: [''],
      id_mascota: ['']
    })
   }

  ngOnInit(): void {
    if(this.cartillaService.mascotaActiva !== undefined){
      this.propietario.patchValue( this.cartillaService.mascotaActiva.propietario )
    }
  }

}
