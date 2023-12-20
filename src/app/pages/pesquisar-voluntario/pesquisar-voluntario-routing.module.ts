import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarVoluntarioPage } from './pesquisar-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarVoluntarioPageRoutingModule {}
