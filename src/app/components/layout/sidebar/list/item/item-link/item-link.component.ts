import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-link',
  templateUrl: './item-link.component.html',
  styleUrls: ['./item-link.component.css']
})
export class ItemLinkComponent implements OnInit {

  @Input() itemLink=[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
