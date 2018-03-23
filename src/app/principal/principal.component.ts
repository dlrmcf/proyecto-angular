import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component ({
    selector: 'principal',
    templateUrl: './principal.component.html'
    providers: [RopaService]
})
export class PrincipalComponent {
    public titulo = 'Pagina Principal';

    public listado_ropa: Array<string>;
    public prenda_a_guardar: string;

    public fecha;

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2017, 2, 23);
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa):
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
    }
}
