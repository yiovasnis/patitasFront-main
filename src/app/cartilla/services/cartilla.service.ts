import { Injectable } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MascotaForm } from '../interfaces/crearMascota.interface';
import { MascotaBD } from '../interfaces/mascotaBD.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartillaService {

  refFormMascota!: DynamicDialogRef;
  baseUrlMascotas: string = environment.baseUrlMascotas;

  mascotaActiva!: MascotaBD;


  constructor( private http: HttpClient ) { }

  crearMascota( mascotasDto: MascotaForm ) {
    return this.http.post(`${this.baseUrlMascotas}`, mascotasDto);
  }

  getMascota( id: string ): Observable<MascotaBD>{
    return this.http.get<MascotaBD>(`${ this.baseUrlMascotas }/${ id }`);
  }
}
