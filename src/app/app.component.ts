import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'My Music Collection';

  version = 1.0

  constructor(private router:Router) {
  }

  public displayVersion(){
    window.alert(this.version)
  }

  displayArtistLIst(){
    this.router.navigate(['list-artists'], {queryParams: {data: new Date()}})
  }
}
