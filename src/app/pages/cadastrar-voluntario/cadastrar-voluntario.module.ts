import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarVoluntarioPageRoutingModule } from './cadastrar-voluntario-routing.module';

import { CadastrarVoluntarioPage } from './cadastrar-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastrarVoluntarioPageRoutingModule
  ],
  declarations: [CadastrarVoluntarioPage]
})
export class CadastrarVoluntarioPageModule {}
