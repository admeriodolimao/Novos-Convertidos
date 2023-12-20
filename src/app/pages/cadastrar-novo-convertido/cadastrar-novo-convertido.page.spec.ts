import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarNovoConvertidoPage } from './cadastrar-novo-convertido.page';

describe('CadastrarNovoConvertidoPage', () => {
  let component: CadastrarNovoConvertidoPage;
  let fixture: ComponentFixture<CadastrarNovoConvertidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarNovoConvertidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
