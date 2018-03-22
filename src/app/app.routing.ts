import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FrutaComponent } from './fruta/fruta.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'home', component: HomeComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'pagina-principal', component: PrincipalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: PrincipalComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
