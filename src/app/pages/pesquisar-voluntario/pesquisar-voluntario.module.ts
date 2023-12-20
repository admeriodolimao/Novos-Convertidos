import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarVoluntarioPageRoutingModule } from './pesquisar-voluntario-routing.module';

import { PesquisarVoluntarioPage } from './pesquisar-voluntario.page';
import { PhonePipe } from 'src/app/pipes/phone-pipe.pipe';
import { SharedModule } from '../extra-modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarVoluntarioPageRoutingModule
  ],
  declarations: [PesquisarVoluntarioPage]
})
export class PesquisarVoluntarioPageModule {}
