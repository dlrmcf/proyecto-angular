import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  public coches = 'Coches que tenemos disponibles:';
  public empleado: Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color;string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('David Rodriguez', 21, 'Informatico', false);
    this.trabajadores = [
      new Empleado('Juan Rodriguez', 21, 'Informatico', true),
      new Empleado('Cristiano Ronaldo', 33, 'Futbolista', true),
      new Empleado('Karim Benzema', 31, 'Programador', false)
    ];
    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);

  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
