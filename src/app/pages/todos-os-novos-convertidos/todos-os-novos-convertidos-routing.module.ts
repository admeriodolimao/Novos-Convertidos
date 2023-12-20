import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosOsNovosConvertidosPage } from './todos-os-novos-convertidos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosOsNovosConvertidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosOsNovosConvertidosPageRoutingModule {}
