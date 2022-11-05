import { Component, OnInit } from '@angular/core';
import { QRCodeElementType, QRCodeErrorCorrectionLevel } from 'angularx-qrcode';
import { CartillaService } from '../../../cartilla/services/cartilla.service';
import { ScannerService } from '../../services/scanner.service';

type ListType = { title: string; val: number }[]

@Component({
  selector: 'app-mostrar-qr',
  templateUrl: './mostrar-qr.component.html',
  styleUrls: ['./mostrar-qr.component.css']
})
export class MostrarQrComponent implements OnInit {
  

  urlQr!: string;

  constructor( private cartillaService:CartillaService, private scannerService: ScannerService ) { }

  ngOnInit(): void {
    this.urlQr = `http://localhost:4200/mascota/${this.cartillaService.mascotaActiva?._id}`;
    this.cartillaService.refFormMascota.destroy();
  }

  saveAsImage(parent: any) {
    let parentElement = null

    // fetches base 64 data from canvas
    parentElement = parent.qrcElement.nativeElement
      .querySelector("canvas")
      .toDataURL("image/png")
    

    if (parentElement) {
      // converts base 64 encoded image to blobData
      let blobData = this.convertBase64ToBlob(parentElement)
      // saves as image
      const blob = new Blob([blobData], { type: "image/png" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      // name of the file
      link.download = "Qrcode"
      link.click()
    }
  }

  private convertBase64ToBlob(Base64Image: string) {
    // split into two parts
    const parts = Base64Image.split(";base64,")
    // hold the content type
    const imageType = parts[0].split(":")[1]
    // decode base64 string
    const decodedData = window.atob(parts[1])
    // create unit8array of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length)
    // insert all character code into uint8array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i)
    }
    // return blob image after conversion
    return new Blob([uInt8Array], { type: imageType })
  }


  cerrarVentana(){
    this.scannerService.refScanner.destroy();
  }

}
