import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.css']

})
export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre: string;
    public edad: number;
    public mayoredad;
    public trabajos: Array<any>;

    constructor() {
        this.nombre = 'David Rodriguez';
        this.edad = 21;
        this.mayoredad = true;
        this.trabajos = ['Carpintero', 'Carnicero'];
    }

ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad();

// VARIABLES Y ALCANCE
var uno = 8;
var dos = 15;

if (uno === 8) {
    let uno = 3;
    var dos = 88;
}

}

    cambiarNombre() {
        this.nombre = 'Jose Jimenez';
    }
    cambiarEdad() {
        this.edad = 22;
    }
}
