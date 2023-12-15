import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntariosPageRoutingModule } from './voluntarios-routing.module';

import { VoluntariosPage } from './voluntarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VoluntariosPageRoutingModule
  ],
  declarations: [VoluntariosPage]
})
export class VoluntariosPageModule {}
