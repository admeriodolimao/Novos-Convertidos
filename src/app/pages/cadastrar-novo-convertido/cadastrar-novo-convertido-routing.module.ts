import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarNovoConvertidoPage } from './cadastrar-novo-convertido.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNovoConvertidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarNovoConvertidoPageRoutingModule {}
