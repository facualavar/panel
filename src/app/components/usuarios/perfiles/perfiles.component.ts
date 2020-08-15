import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  idSelected = null;
  perfilesList = [
    {
      id: 19,
      nombre: 'Administrador',
      habilitado: true,
    },
    {
      id: 20,
      nombre: 'Gestor de Contenidos',
      habilitado: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  borrar(id){
    this.idSelected = id;
  }

  deleteUser(){
    alert(this.idSelected);
    this.idSelected = null;
  }

  deshabilitar(id){
    this.perfilesList.forEach(element => {
      if (element.id == id) {
        element.habilitado = !element.habilitado;
      }
    });
  }

}
