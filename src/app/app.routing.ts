import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'pagina-principal', component: PrincipalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
   {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: PrincipalComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
