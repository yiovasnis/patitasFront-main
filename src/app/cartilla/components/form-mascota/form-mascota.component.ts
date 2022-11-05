import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartillaService } from '../../services/cartilla.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MostrarQrComponent } from '../../../scanner/pages/mostrar-qr/mostrar-qr.component';
import { ScannerService } from '../../../scanner/services/scanner.service';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent implements OnInit {

  formMascota: FormGroup;

  constructor( private fb: FormBuilder, private cartillaService:CartillaService, private dialogService:DialogService,
                private scannerService: ScannerService ) { 
    this.formMascota = this.fb.group({
      nombreMascota: [''],
      expediente: [''],
      fechaMascota: [''],
      sexoMascota: [''],
      raza: [''],
      color: [''],
      descripcionMascota: [''],
      microchip: [''],
      animal: [''],

      nombrePropietario: [''],
      direccion: [''],
      telefono: [''],
      correo: [''],
    })
  }

  ngOnInit(): void {
    
  }

  registrar() {
    this.cartillaService.crearMascota( this.formMascota.value ).subscribe(
      (res: any) => {
        this.cartillaService.mascotaActiva = res;
        this.scannerService.refScanner = this.dialogService.open(MostrarQrComponent, {
          width: '68%',
          height: '47%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          dismissableMask: true,
          showHeader: false
        })

      },
      (err) => {}
    )

  }

}
