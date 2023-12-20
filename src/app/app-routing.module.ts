import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'cadastrar-novo-convertido',
    loadChildren: () => import('./pages/cadastrar-novo-convertido/cadastrar-novo-convertido.module').then( m => m.CadastrarNovoConvertidoPageModule)
  },
  {
    path: 'pesquisar-novo-convertido',
    loadChildren: () => import('./pages/pesquisar-novo-convertido/pesquisar-novo-convertido.module').then( m => m.PesquisarNovoConvertidoPageModule)
  },
  {
    path: 'todos-os-novos-convertidos',
    loadChildren: () => import('./pages/todos-os-novos-convertidos/todos-os-novos-convertidos.module').then( m => m.TodosOsNovosConvertidosPageModule)
  },
  {
    path: 'cadastrar-voluntario',
    loadChildren: () => import('./pages/cadastrar-voluntario/cadastrar-voluntario.module').then( m => m.CadastrarVoluntarioPageModule)
  },
  {
    path: 'pesquisar-voluntario',
    loadChildren: () => import('./pages/pesquisar-voluntario/pesquisar-voluntario.module').then( m => m.PesquisarVoluntarioPageModule)
  },
  {
    path: 'todos-os-voluntarios',
    loadChildren: () => import('./pages/todos-os-voluntarios/todos-os-voluntarios.module').then( m => m.TodosOsVoluntariosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
