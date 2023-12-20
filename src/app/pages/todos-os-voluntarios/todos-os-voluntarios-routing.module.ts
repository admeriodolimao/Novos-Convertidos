import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosOsVoluntariosPage } from './todos-os-voluntarios.page';

const routes: Routes = [
  {
    path: '',
    component: TodosOsVoluntariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosOsVoluntariosPageRoutingModule {}
