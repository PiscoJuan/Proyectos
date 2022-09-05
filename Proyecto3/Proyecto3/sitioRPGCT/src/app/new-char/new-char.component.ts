import { Component, OnInit } from '@angular/core';
import { UsserService } from '../servicios/usser.service';
import { Usser } from '../interfaz/usser';
import { Character } from '../interfaz/character';
import { CharService } from '../servicios/char.service';
import { ClassService } from '../servicios/class.service';

@Component({
  selector: 'app-new-char',
  templateUrl: './new-char.component.html',
  styleUrls: ['./new-char.component.css']
})

export class NewCharComponent implements OnInit {
  breakpoint!: number;
  breakpoint2!: number;
  breakpoint3!: number;
  title = 'sitioRPGCT';
  displayedColumns: string[] = ['idUsuario', 'nombre', 'apellido', 'usuario', 'idPersonaje'];
  dataSource = [];
  dataSource2:Character[]=[];

  claseNo: Object ={id:0}
  
  constructor(private usserService: UsserService,private charService: CharService) {
    usserService.obtenerNoRelacional().subscribe(respuesta => {
      let usser = respuesta as Usser
      this.title = usser.cabecera
    })
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 2 : 6;
    this.breakpoint2 = (window.innerWidth <= 440) ? 2 : 3;
    this.breakpoint3 = (window.innerWidth <= 500) ? 4 : 8;
    this.usserService.obtenerNoRelacional().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })

    this.charService.obtenerDatos().subscribe(data => {
      this.dataSource2 = data as any
    })
    
  }
  
  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 6;
  }*/
}
