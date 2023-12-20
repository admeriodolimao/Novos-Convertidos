import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-cadastrar-novo-convertido',
  templateUrl: './cadastrar-novo-convertido.page.html',
  styleUrls: ['./cadastrar-novo-convertido.page.scss'],
})
export class CadastrarNovoConvertidoPage  {


  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private allCrudsService: AllCrudsService,
    private alertController: AlertController,
    private router: Router
    ) {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['Senhafacil123#', Validators.required],
        telefone: ['', Validators.required],
        statusRelacionamento: ['', Validators.required],
        jaTeveOutraReligiao: ['', Validators.required],
        dataCriacao: [this.formatDate(new Date())],
        dataNascimento: [new Date().toISOString().split('T')[0], Validators.required],
       // role: [1] // Campo invisível
      });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}T00:00:00.000`;
  }

  // onDateChange(newDate: Date) {
  //   this.userForm.get('dataNascimento').setValue(this.formatDate(newDate));
  // }

  onDateChange(newDateValue: any) {
    // Assuming newDateValue is already in ISO format like '2023-12-07'
    this.userForm.get('dataNascimento')?.setValue(newDateValue);
  }
  
  

  async onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    this.allCrudsService.criarNovoConvertido(this.userForm.value)
      .subscribe({
        next: async (resposta) => {
          console.log(resposta)
          const alert = await this.alertController.create({
            header: 'Sucesso',
            message: 'Novo Convertido criado com sucesso!',
            buttons: [{
              text: 'Ok',
              handler: () => {
               // this.allCrudsService.RefreshPage()
                this.router.navigateByUrl('/home'); // Substitua '/home' pelo caminho da sua página inicial
              }
            }]
          });
  
          await alert.present();
        },
        error: async (erro) => {
          console.error(erro)
          console.log(erro)
          const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Ocorreu um erro ao criar o voluntário. Por favor, tente novamente.',
            buttons: ['Ok']
          });
  
          await alert.present();
        }
      });
    } else {
      this.markAllAsTouched();
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }
  
  markAllAsTouched() {
    Object.values(this.userForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }


}
