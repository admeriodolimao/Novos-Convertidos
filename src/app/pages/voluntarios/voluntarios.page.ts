import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.page.html',
  styleUrls: ['./voluntarios.page.scss'],
})
export class VoluntariosPage  {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [''],
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

  onSubmit() {
    console.log(this.userForm.value);
  }

}
