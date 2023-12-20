import { Component, OnInit } from '@angular/core';
import { AllCrudsService, CreateNovoConvertidoDTO } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-todos-os-novos-convertidos',
  templateUrl: './todos-os-novos-convertidos.page.html',
  styleUrls: ['./todos-os-novos-convertidos.page.scss'],
})
export class TodosOsNovosConvertidosPage implements OnInit {

  novosConvertidos: CreateNovoConvertidoDTO[] = [];

  constructor(private allCrudsService: AllCrudsService) {}

  ngOnInit() {
    this.allCrudsService.obterTodosOsNovosConvertidos()
      .subscribe(
        data => this.novosConvertidos = data,
        error => console.error(error)
      );
  }

  editar(id: string) {
    // Lógica para editar o item com o ID fornecido
  }
  
  excluir(id: number) {
    // Chama a função de exclusão no serviço, que agora inclui a confirmação.
    this.allCrudsService.excluirNovoConvertido(id);
  }
  

}
