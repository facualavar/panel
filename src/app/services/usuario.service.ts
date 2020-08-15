import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './../model/usuario'
import { Perfil } from './../model/perfil'
import { environment } from 'src/environments/environment';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url_base: string;

  constructor(private httpClient : HttpClient) {
    this.url_base = environment.url_base + 'usuario/';    
  }

  //usuariosUrl = environment.url_base + 'usuario/';

  getUsuarios(): Observable<any>{
    console.log('entro servicio GET Usuarios');
    return this.httpClient.get(this.url_base);
  }

  getUsuario(): Observable<any>{
    console.log('entro servicio GET UN Usuario');
    return this.httpClient.get(this.url_base);
  }

  nuevoUsuario(usuario: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers : headers};
    let body = JSON.stringify(usuario);
    console.log('entro servicio nuevo Usuario');
    return this.httpClient.post(this.url_base+'new/', body, options);
  }
  
  eliminarUsuario(id): Observable<any> {
    console.log('entro servicio delete Usuario');
    return this.httpClient.delete(this.url_base + id);
  }

  editarUsuario(usuario: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(usuario);
    console.log("entro service update Usuario");
    return this.httpClient.post( this.url_base + usuario.id+'/edit', body, options);
  }
}