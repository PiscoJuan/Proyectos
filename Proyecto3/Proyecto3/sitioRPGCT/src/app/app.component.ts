import { Component } from '@angular/core';
import { CharService } from './servicios/char.service';
import { ClassService } from './servicios/class.service';
import { UsserService } from './servicios/usser.service';
import { Usser } from './interfaz/usser';
import {MatFormFieldModule} from '@angular/material/form-field'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitioRPGCT';

  constructor(private usserService: UsserService) {
    usserService.obtenerNoRelacional().subscribe(respuesta => {
      let usser = respuesta as Usser
      this.title = usser.cabecera
    })
  }

}
