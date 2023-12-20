import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AllCrudsService } from 'src/app/services/all-cruds.service';

@Component({
  selector: 'app-cadastrar-voluntario',
  templateUrl: './cadastrar-voluntario.page.html',
  styleUrls: ['./cadastrar-voluntario.page.scss'],
})
export class CadastrarVoluntarioPage  {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private allCrudsService: AllCrudsService,
    private alertController: AlertController,
    private router: Router
    ) {
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: [''],
      password: [''],
      cpfCnpj: [''],
      company: [''],
      mobilePhone: [''],
      phone: [''],
      postalCode: [''],
      address: [''],
      province: [''],
      state: [''],
      city: [''],
      addressNumber: [''],
      additionalEmails: [''],
      observations: [''],
      role: [1] // Campo invisível
    });
  }


  

  async onSubmit() {
    this.allCrudsService.criarVoluntario(this.userForm.value)
      .subscribe({
        next: async (resposta) => {
          const alert = await this.alertController.create({
            header: 'Sucesso',
            message: 'Voluntário criado com sucesso!',
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
          const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Ocorreu um erro ao criar o voluntário. Por favor, tente novamente.',
            buttons: ['Ok']
          });
  
          await alert.present();
        }
      });
  }
  
  


}
