import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeoresRoutingModule } from './heores-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    ImagenPipe,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeoresRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
