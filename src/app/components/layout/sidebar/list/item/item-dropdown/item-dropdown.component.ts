import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})
export class ItemDropdownComponent implements OnInit {

  @Input() itemDrop=[];

  public abierto:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cambiarEstado(){
    this.abierto = !this.abierto;
  }

}
