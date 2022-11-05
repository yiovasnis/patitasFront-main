import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../../login/services/login.service';


import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Message,MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CartillaService } from '../../services/cartilla.service';
import { FormMascotaComponent } from '../../components/form-mascota/form-mascota.component';


@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css'],
  providers: [MessageService]
})
export class ClinicaComponent implements OnInit {

  formVeterinario : FormGroup;

  constructor( private fb: FormBuilder, private loginService: LoginService, private activatedRoute: ActivatedRoute,
               private messageService: MessageService, private dialogService:DialogService,
               private cartillaService: CartillaService) { 
    this.formVeterinario = this.fb.group({
      clinica: [''],
      nombreMedico: [''],
      cedula: [''],
      direccion: [''],
      telefono: [''],
      correo: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    //Observamos para actualizar cada que se cambie el id de la URL
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.loginService.getVeterinario( id ) )
    )
    .subscribe(
      (res) => {
        this.loginService.veterinario = res;
        this.loginService.idVeterinario = res._id;
        this.getVet();
      }
    )
  }

  getVet() {
    this.formVeterinario.patchValue(this.loginService.veterinario)
  }

  guardar() {
    this.loginService.actualizarVet( this.loginService.idVeterinario, this.formVeterinario.value )
    .pipe(
      switchMap( ( res: any ) => this.loginService.getVeterinario(res._id) )
    )
    .subscribe(
      (res) => {
        this.loginService.veterinario = res;
        this.messageService.add({severity:'success', summary:'¡Exito!', detail: 'Informacion actualizada'});
        this.getVet();
      }, 
      (err) => { 

        this.messageService.add({severity:'error', summary:'¡Ops!', detail: 'Ocurrio un error'});
        console.log(err) 
      }
    )
  }

  registrarMascota() {
    this.cartillaService.refFormMascota = this.dialogService.open(FormMascotaComponent, {
      width: '90%',
      height: '90%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      dismissableMask: true,
    })
  }

}
