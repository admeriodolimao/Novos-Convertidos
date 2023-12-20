import { Component, OnInit } from '@angular/core';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-pesquisar-voluntario',
  templateUrl: './pesquisar-voluntario.page.html',
  styleUrls: ['./pesquisar-voluntario.page.scss'],
})
export class PesquisarVoluntarioPage  {

  voluntarios: any[] = []; // Array para armazenar os novos convertidos
  termoDePesquisa = '';

  constructor(private allCrudsService: AllCrudsService) {
    this.carregarVoluntarios();
  }
  
  carregarVoluntarios() {
    // Implementação para carregar a lista inicial de novos convertidos.
  }

  editar(id: number) {
    // Implementação para redirecionar para a página/modal de edição.
  }

  excluir(id: number) {
    // Chama a função de exclusão no serviço, que agora inclui a confirmação.
    this.allCrudsService.excluirVoluntario(id);
  }
  

  pesquisar() {
    this.allCrudsService.searchVoluntarios({ term: this.termoDePesquisa }).subscribe({
      next: (result) => {
        this.voluntarios = result;
        console.log(result)
      },
      error: (err) => {
        console.error('Erro na pesquisa:', err);
        console.log(err)
      }
    });
  }


}
