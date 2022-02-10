import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.0,
        backgroundColor: 'blue'
      })),
      transition('closed => open',[
        animate('1s')
      ]),
      transition('open => closed', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen
  }

    constructor() { }

  ngOnInit(): void {
  }

}
