import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { from } from 'rxjs';
import { tap, switchMap, finalize, catchError } from 'rxjs/operators';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})



export class AllCrudsService {
 // [x: string]: any;

  constructor(
    private httpClient: HttpClient,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  apiUrl = 'https://api-novos-convertidos.onrender.com'
  apiUrlDev = 'http://localhost:3001'


  ////SERVICOS GERAIS
  
  async RefreshPage(): Promise<void> {
    window.location.reload();
  }

  ///////// VOLUNTÁRIOS

  criarVoluntario(voluntario: CreateVoluntarioDTO): Observable<any> {
    let loadingInstance: HTMLIonLoadingElement;
  
    return from(this.loadingController.create({
      message: 'Enviando dados...'
    })).pipe(
      tap(loading => {
        loadingInstance = loading;
        loading.present();
      }),
      switchMap(() => this.httpClient.post(`${this.apiUrl}/voluntarios`, voluntario)),
      finalize(() => loadingInstance.dismiss())
    );
  }

  obterTodosOsVoluntarios(): Observable<CreateVoluntarioDTO[]> {
    let loadingInstance: HTMLIonLoadingElement;

    this.loadingController.create({
      message: 'Carregando...'
    }).then(loading => {
      loadingInstance = loading;
      loading.present();
    });

    return this.httpClient.get<CreateVoluntarioDTO[]>(`${this.apiUrl}/voluntarios`).pipe(
      tap(data => console.log('data received', data)),
      finalize(() => loadingInstance.dismiss())
    );
  }

  obterVoluntarioPeloID(id: number) {
    return this.httpClient.get(`${this.apiUrl}/voluntarios/${id}`);
  }

  editarVoluntario(id: number, voluntario: UpdatePutVolDTO): Observable<any> {
    return this.processRequestWithLoadingAndAlert(
      this.httpClient.put(`${this.apiUrl}/voluntarios/${id}`, voluntario),
      'Editando...'
    );
  }
  
  excluirVoluntario(id: number) {
    this.presentConfirmAlert(() => this.processRequestWithLoadingAndAlert(
      this.httpClient.delete(`${this.apiUrl}/voluntarios/${id}`),
      'Excluindo...'
    ).subscribe());
  }

  ////////// NOVOS CONVERTIDOS
  criarNovoConvertido(convertido: CreateNovoConvertidoDTO): Observable<any> {
    let loadingInstance: HTMLIonLoadingElement;
  
    return from(this.loadingController.create({
      message: 'Enviando dados...'
    })).pipe(
      tap(loading => {
        loadingInstance = loading;
        loading.present();
      }),
      switchMap(() => this.httpClient.post(`${this.apiUrl}/novos-convertidos`, convertido)),
      finalize(() => loadingInstance.dismiss())
    );
  }
  

  obterTodosOsNovosConvertidos(): Observable<CreateNovoConvertidoDTO[]> {
    let loadingInstance: HTMLIonLoadingElement;
  
    this.loadingController.create({
      message: 'Carregando...'
    }).then(loading => {
      loadingInstance = loading;
      loading.present();
    });
  
    return this.httpClient.get<CreateNovoConvertidoDTO[]>(`${this.apiUrl}/novos-convertidos`).pipe(
      tap(data => console.log('data received', data)), // Ação secundária com os dados recebidos
      finalize(() => loadingInstance.dismiss()) // Garante que o loading é ocultado no final
    );
  }
  

  obterNovoConvertidoPeloID(id: number) {
    return this.httpClient.get(`${this.apiUrl}/novos-convertidos/${id}`);
  }

  editarNovoConvertido(id: number, convertido: UpdatePutNovoConvertidoDTO): Observable<any> {
    return this.processRequestWithLoadingAndAlert(
      this.httpClient.put(`${this.apiUrl}/novos-convertidos/${id}`, convertido),
      'Editando...'
    );
  }
  
  excluirNovoConvertido(id: number) {
    this.presentConfirmAlert(() => this.processRequestWithLoadingAndAlert(
      this.httpClient.delete(`${this.apiUrl}/novos-convertidos/${id}`),
      'Excluindo...'
    ).subscribe());
  }
  

  searchVoluntarios(criteria: { term: string }): Observable<any[]> {
    let loadingInstance: HTMLIonLoadingElement;
  
    return from(this.loadingController.create({
      message: 'Carregando...'
    })).pipe(
      tap(loading => {
        loadingInstance = loading;
        loading.present();
      }),
      switchMap(() => this.httpClient.post<any[]>(`${this.apiUrl}/voluntarios/pesquisar`, criteria)),
      tap(data => {
        if (data.length === 0) {
          this.presentAlert('NENHUM DADO ENCONTRADO');
        }
      }),
      finalize(() => loadingInstance.dismiss()),
      catchError(error => {
        this.presentAlert('Erro ao buscar dados');
        throw error;
      })
    );
  }
  
  searchNovosConvertidos(criteria: { term: string }): Observable<any[]> {
    let loadingInstance: HTMLIonLoadingElement;
  
    return from(this.loadingController.create({
      message: 'Carregando...'
    })).pipe(
      tap(loading => {
        loadingInstance = loading;
        loading.present();
      }),
      switchMap(() => this.httpClient.post<any[]>(`${this.apiUrl}/novos-convertidos/pesquisar`, criteria)),
      tap(data => {
        if (data.length === 0) {
          this.presentAlert('NENHUM DADO ENCONTRADO');
        }
      }),
      finalize(() => loadingInstance.dismiss()),
      catchError(error => {
        this.presentAlert('Erro ao buscar dados');
        throw error;
      })
    );
  }
  
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

  private processRequestWithLoadingAndAlert(request: Observable<any>, loadingMessage: string): Observable<any> {
    let loadingInstance: HTMLIonLoadingElement;
  
    return from(this.loadingController.create({ message: loadingMessage })).pipe(
      tap(loading => {
        loadingInstance = loading;
        loading.present();
      }),
      switchMap(() => request),
      tap(() => this.presentAlert('Operação realizada com sucesso!')),
      finalize(() => loadingInstance.dismiss()),
      catchError(error => {
        this.presentAlert('Erro ao realizar a operação');
        throw error;
      })
    );
  }

  async presentConfirmAlert(confirmAction: () => void, message: string = 'Tem certeza que deseja excluir este item?') {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: message,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            confirmAction();
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}






export interface CreateVoluntarioDTO {
  id: any;
  createdAt: string;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string; 
  company: string; 
  mobilePhone: string;  
  phone: string; 
  postalCode: string;
  address: string; 
  province: string;     
  state: string;     
  city: string; 
  addressNumber: string;
  additionalEmails: string;
  birthAt?: string; // Opcional
  role?: number; // Opcional
  emailVerificationCode?: string; // Opcional
  SMSVerificationCode?: string; // Opcional
  observations: string;
}

export interface UpdatePutVolDTO {
  
}

export interface CreateNovoConvertidoDTO {
  id: any;
  name: string;
  telefone: string;
  email: string;
  password: string;
  statusRelacionamento: string; 
  jaTeveOutraReligiao: string; 
  dataCriacao?: string; // Opcional
  dataNascimento?: string; // Opcional
 // role?: number; // Opcional
  // Observations, EmailVerificationCode e SMSVerificationCode omitidos
}

export interface UpdatePutNovoConvertidoDTO {
  
}


//////