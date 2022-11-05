import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscanearQrComponent } from './pages/escanear-qr/escanear-qr.component';
import { MostrarQrComponent } from './pages/mostrar-qr/mostrar-qr.component';
import { RecuperarQrComponent } from './pages/recuperar-qr/recuperar-qr.component';


import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { PrimeModule } from '../primeNG/prime.module';



@NgModule({
  declarations: [
    EscanearQrComponent,
    MostrarQrComponent,
    RecuperarQrComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    PrimeModule,
    ZXingScannerModule
  ]
})
export class ScannerModule { }
