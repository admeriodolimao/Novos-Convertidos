import { Component, OnInit } from '@angular/core';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-pesquisar-novo-convertido',
  templateUrl: './pesquisar-novo-convertido.page.html',
  styleUrls: ['./pesquisar-novo-convertido.page.scss'],
})
export class PesquisarNovoConvertidoPage {
  novosConvertidos: any[] = [];
  termoDePesquisa = '';

  constructor(private allCrudsService: AllCrudsService) {
    this.carregarNovosConvertidos();
  }
  
  carregarNovosConvertidos() {
    // Implementação para carregar a lista inicial de novos convertidos.
  }

  editar(id: number) {
    // Implementação para redirecionar para a página/modal de edição.
  }

  excluir(id: number) {
    // Chama a função de exclusão no serviço, que agora inclui a confirmação.
    this.allCrudsService.excluirNovoConvertido  (id);
  }
  

  pesquisar() {
    this.allCrudsService.searchNovosConvertidos({ term: this.termoDePesquisa }).subscribe({
      next: (result) => {
        this.novosConvertidos = result;
      },
      error: (err) => {
        console.error('Erro na pesquisa:', err);
      }
    });
  }

}
