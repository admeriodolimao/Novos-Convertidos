import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosOsNovosConvertidosPageRoutingModule } from './todos-os-novos-convertidos-routing.module';

import { TodosOsNovosConvertidosPage } from './todos-os-novos-convertidos.page';
import { HttpClient } from '@angular/common/http';
import { AllCrudsService } from 'src/app/services/all-cruds.service';
import { PhonePipe } from 'src/app/pipes/phone-pipe.pipe';
import { SharedModule } from '../extra-modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TodosOsNovosConvertidosPageRoutingModule
  ],
  declarations: [TodosOsNovosConvertidosPage],
  providers: [AllCrudsService]
})
export class TodosOsNovosConvertidosPageModule {}
