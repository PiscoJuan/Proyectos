import { Component, OnInit } from '@angular/core';

import { CharService } from '../servicios/char.service';
import { ClassService } from '../servicios/class.service';
import { Character } from '../interfaz/character';
import { Classs } from '../interfaz/classs';

interface Objectt {
  id: Int16Array;
  class: string;
}

@Component({
  selector: 'app-list-char',
  templateUrl: './list-char.component.html',
  styleUrls: ['./list-char.component.css']
})
export class ListCharComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'clase', 'fuerza', 'destreza', 'constitucion', 'inteligencia', 'sabiduria', 'carisma'];
  dataSource = [];
  dataSource2:Classs[]=[];

  resp: any =[];

  selected:any=0;
  clase:any=null;

  claseNo: Object ={id:0}

  aahh(e:any){
    if (e.target.value != '0'){
      this.selected=e.target.value
      this.classService.obtenerDatos2nyId(this.selected).subscribe(respuesta => {
        this.clase=respuesta
      })
    }else{
      this.clase=this.claseNo
  }
  }

  constructor(private charService: CharService, private classService:ClassService) {}

  ngOnInit(): void {
    this.charService.obtenerDatos().subscribe(respuesta => {
      this.dataSource = respuesta as any
    })
    
    this.clase=this.claseNo

    this.classService.obtenerDatos2().subscribe(respuesta => {
      this.dataSource2 = respuesta as any
    })
    /*this.classService.obtenerDatos2().subscribe(respuesta => {
      this.resp = respuesta as Objectt
      for (let data in respuesta){
        let onbj1=new Objectt;
        this.objetos.push(onbj1)
      }
    })*/
  }
  /*ngOnchange(): void{

  }*/
}
