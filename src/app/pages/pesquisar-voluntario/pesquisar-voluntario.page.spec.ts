import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarVoluntarioPage } from './pesquisar-voluntario.page';

describe('PesquisarVoluntarioPage', () => {
  let component: PesquisarVoluntarioPage;
  let fixture: ComponentFixture<PesquisarVoluntarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesquisarVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
