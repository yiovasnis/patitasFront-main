import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../../login/services/login.service';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { EscanearQrComponent } from '../../scanner/pages/escanear-qr/escanear-qr.component';
import { ScannerService } from '../../scanner/services/scanner.service';
import { CartillaService } from '../../cartilla/services/cartilla.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  // idVeterinario!: string;

  constructor( private loginService: LoginService, private router: Router, private dialogService: DialogService,
               private scannerLogin: ScannerService, private cartillaService:CartillaService ) { }

  ngOnInit(): void {

    

    if( this.cartillaService.mascotaActiva === undefined ){
      this.items = [
        {
          label: 'Clinica',
          routerLink: `/clinica/${localStorage.getItem('idVet')}`,
      
        },
        {
          label: 'Mascota',
          routerLink: `/mascota/myPet`
        },
        {
          label: 'Propietario',
          routerLink: `/propietario/myPet`
  
        },
        {
          label: 'Vacunación',
          routerLink: `/vacunacion/myPet`
        },
        {
          label: 'Desparacitación',
          routerLink: `/desparasitacion/myPet`
        },
        {
          label: 'Revisiones',
          routerLink: `/revisiones/myPet`
        }
      ];
    } else {

      this.items = [
        {
          label: 'Clinica',
          routerLink: `/clinica/${localStorage.getItem('idVet')}`
        },
        {
          label: 'Mascota',
          routerLink: `/mascota/${this.cartillaService.mascotaActiva._id}`
        },
        {
          label: 'Propietario',
          routerLink: `/propietario/${this.cartillaService.mascotaActiva._id}`
  
        },
        {
          label: 'Vacunación',
          routerLink: `/vacunacion/`
        },
        {
          label: 'Desparacitación',
          routerLink: `/desparasitacion/`
        },
        {
          label: 'Revisiones',
          routerLink: `/revisiones/`
        }
      ];
    }
    
  }

  salir() {
    this.loginService.idVeterinario = '';
    this.loginService.veterinario = null!;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  escanear() {
    this.scannerLogin.refScanner = this.dialogService.open(EscanearQrComponent, {
      width: '60%',
      height: '60%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      dismissableMask: true,
      showHeader: false,
    })
  }

}
