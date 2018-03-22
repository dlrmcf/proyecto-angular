import { Component } from '@angular/core';
import {Home} from './home';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public coches = 'Coches que tenemos disponibles:';
  public home:Home;
  public trabajadores:Array<Home>;
  public trabajador_externo:boolean;
  public color;string;
  public color_seleccionado:string;

  constructor(){
    this.home = new Home('David Rodriguez', 21, 'Informatico', false);
    this.trabajadores = [
      new Home('Juan Rodriguez', 21, 'Informatico', true),
      new Home('Cristiano Ronaldo', 33, 'Futbolista', true),
      new Home('Karim Benzema', 31, 'Programador', false)
    ];
    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.home);
    console.log(this.trabajadores);

  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
