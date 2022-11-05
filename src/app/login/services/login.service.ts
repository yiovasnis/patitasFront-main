import { Injectable } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  refLogin !: DynamicDialogRef;
  private baseUrlUsuarios: string = environment.baseUrlUsuarios;

  //INFORMACION DEL VETERINARIO
  idVeterinario!: string;
  veterinario !: Usuario;

  
  constructor( private http: HttpClient ) { }

  registrarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>( `${this.baseUrlUsuarios}/crear`, usuario );
  }

  iniciarSesion( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>( `${this.baseUrlUsuarios}/login`, usuario )
  }

  //Obtener informacion de un veterinario
  getVeterinario( usuarioID: string ): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrlUsuarios}/${usuarioID}`);
  }

  actualizarVet( id: string, usuario: Usuario ) {
    return this.http.patch(`${this.baseUrlUsuarios}/${id}`, usuario)
  }
}
