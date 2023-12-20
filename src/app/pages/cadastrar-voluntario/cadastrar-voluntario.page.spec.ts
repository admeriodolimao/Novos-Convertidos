import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarVoluntarioPage } from './cadastrar-voluntario.page';

describe('CadastrarVoluntarioPage', () => {
  let component: CadastrarVoluntarioPage;
  let fixture: ComponentFixture<CadastrarVoluntarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
