import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarNovoConvertidoPage } from './pesquisar-novo-convertido.page';

describe('PesquisarNovoConvertidoPage', () => {
  let component: PesquisarNovoConvertidoPage;
  let fixture: ComponentFixture<PesquisarNovoConvertidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesquisarNovoConvertidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
