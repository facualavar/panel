import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  lista = [
    {
      'ruta':'/dash',
      'texto':'Dashboard',
      'icon': 'fa fa-chart-line',
      'desplegable': false
    },
    {
    'ruta':'/empresa',
    'texto':'Empresa',
    'icon': 'far fa-building',
    'desplegable': false
    },
    {
      'ruta': [
        {
          'ruta':'/perfiles',
          'texto':'Perfiles',
          'icon': 'far fa-building',
          'desplegable': false
        },
        {
          'ruta':'/usuarios',
          'texto':'Usuarios',
          'icon': 'far fa-user',
          'desplegable': false
        },
      ],
      'texto':'Usuario',
      'icon': 'far fa-user',
      'desplegable': true
    },
    {
      'ruta':'/marcas',
      'texto':'Marcas',
      'icon': 'fab fa-apple',
      'desplegable': false
    },
    {
      'ruta':'/productos',
      'texto':'Productos',
      'icon': 'far fa-building',
      'desplegable': false
    },
    {
      'ruta': [
        {
          'ruta':'/pedidos',
          'texto':'Pedidos',
          'icon': 'far fa-building',
          'desplegable': false
        },{
          'ruta':'/pedidosG',
          'texto':'Gestionar',
          'icon': 'far fa-building',
          'desplegable': false
        },{
          'ruta':'/pedidosF',
          'texto':'Finalizados',
          'icon': 'far fa-building',
          'desplegable': false
        },
      ],
      'texto':'Pedidos',
      'icon': 'fa fa-shopping-cart',
      'desplegable': true
    },    
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {    
  }

}
