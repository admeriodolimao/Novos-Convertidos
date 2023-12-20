import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarVoluntarioPage } from './cadastrar-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarVoluntarioPageRoutingModule {}
