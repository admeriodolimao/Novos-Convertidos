import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarNovoConvertidoPageRoutingModule } from './cadastrar-novo-convertido-routing.module';

import { CadastrarNovoConvertidoPage } from './cadastrar-novo-convertido.page';
import { SharedModule } from '../extra-modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastrarNovoConvertidoPageRoutingModule
  ],
  declarations: [CadastrarNovoConvertidoPage]
})
export class CadastrarNovoConvertidoPageModule {}
