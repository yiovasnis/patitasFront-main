import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';
import { ScannerService } from '../../services/scanner.service';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.component.html',
  styleUrls: ['./escanear-qr.component.css']
})
export class EscanearQrComponent implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];

  constructor( private router: Router, private scannerService:ScannerService ) { }

  ngOnInit(): void {
  }

  scann( event:any ){
    location.assign(`${event}`);
    this.scannerService.refScanner.close();
  }

  camaras(event: any){
    console.log('cam: ', event[0].label)
    console.log('cam: ', event[0])
  }

}
