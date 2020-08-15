import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../../services/usuario.service'
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  idSelected = null;

  usuariosList = [
    {
      id: 2014,
      user: 'facundo.alavar',
      nombres: 'Ariel Facundo',
      apellidos: 'Alavar',
      email: 'facundoalavar@gmail.com',
      ingreso: '10/05/2020',
      habilitado: true,
    },
    {
      id: 2015,
      user: 'juan.gines',
      nombres: 'Juan Gines',
      apellidos: 'Herrera',
      email: 'juan@gmail.com',
      ingreso: '01/04/2020',
      habilitado: false,
    }
  ]

  constructor(private usuService: UsuarioService) { }

  borrar(id){
    this.idSelected = id;
  }

  deleteUser(){
    alert(this.idSelected);
    this.idSelected = null;
  }

  deshabilitar(id){
    this.usuariosList.forEach(element => {
      if (element.id == id) {
        element.habilitado = !element.habilitado;
      }
    });
  }

  ngOnInit() {
  }

}
      