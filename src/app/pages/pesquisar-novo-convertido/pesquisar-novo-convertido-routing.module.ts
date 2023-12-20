import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarNovoConvertidoPage } from './pesquisar-novo-convertido.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarNovoConvertidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarNovoConvertidoPageRoutingModule {}
