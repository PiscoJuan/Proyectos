import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-char',
  templateUrl: './edit-char.component.html',
  styleUrls: ['./edit-char.component.css']
})
export class EditCharComponent implements OnInit {
  breakpoint!: number;
  breakpoint2!: number;
  breakpoint3!: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 2 : 6;
    this.breakpoint2 = (window.innerWidth <= 440) ? 2 : 3;
    this.breakpoint3 = (window.innerWidth <= 500) ? 4 : 8;
  }

}
