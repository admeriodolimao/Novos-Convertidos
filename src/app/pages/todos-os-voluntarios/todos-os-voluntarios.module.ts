import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosOsVoluntariosPageRoutingModule } from './todos-os-voluntarios-routing.module';

import { TodosOsVoluntariosPage } from './todos-os-voluntarios.page';
import { SharedModule } from '../extra-modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TodosOsVoluntariosPageRoutingModule
  ],
  declarations: [TodosOsVoluntariosPage]
})
export class TodosOsVoluntariosPageModule {}
