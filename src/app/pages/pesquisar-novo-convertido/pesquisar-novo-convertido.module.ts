import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarNovoConvertidoPageRoutingModule } from './pesquisar-novo-convertido-routing.module';

import { PesquisarNovoConvertidoPage } from './pesquisar-novo-convertido.page';
import { PhonePipe } from 'src/app/pipes/phone-pipe.pipe';
import { SharedModule } from '../extra-modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarNovoConvertidoPageRoutingModule
  ],
  declarations: [PesquisarNovoConvertidoPage]
})
export class PesquisarNovoConvertidoPageModule {}
