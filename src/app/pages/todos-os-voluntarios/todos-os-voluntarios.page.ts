import { Component, OnInit } from '@angular/core';
import { ISODateString } from '@capacitor/core';
import { CreateNovoConvertidoDTO, AllCrudsService, CreateVoluntarioDTO } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-todos-os-voluntarios',
  templateUrl: './todos-os-voluntarios.page.html',
  styleUrls: ['./todos-os-voluntarios.page.scss'],
})
export class TodosOsVoluntariosPage implements OnInit {

  voluntarios: CreateVoluntarioDTO[] = [];

  constructor(private allCrudsService: AllCrudsService) {}

  ngOnInit() {
    this.allCrudsService.obterTodosOsVoluntarios()
      .subscribe(
        data => this.voluntarios = data,
        error => console.error(error)
      );
  }

  
  editar(id: string) {
    // Lógica para editar o item com o ID fornecido
  }
  
  excluir(id: number) {
    // Chama a função de exclusão no serviço, que agora inclui a confirmação.
    this.allCrudsService.excluirVoluntario(id);
  }
  

}
