import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  idSelected = null;
  marcasList = [
    {
      id: 1,
      nombre: 'Addidas',
      logo: 'logo1.jpg',
      habilitado: true,
    },
    {
      id: 2,
      nombre: 'Nike',
      logo: 'logo1.jpg',
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
    this.marcasList.forEach(element => {
      if (element.id == id) {
        element.habilitado = !element.habilitado;
      }
    });
  }

}
