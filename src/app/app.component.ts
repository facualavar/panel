import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stateSidebar: boolean = true;
  title = 'panel';

  openSidebar(){
    this.stateSidebar = !this.stateSidebar;    
  }

  ngOnInit() {
  }
}
