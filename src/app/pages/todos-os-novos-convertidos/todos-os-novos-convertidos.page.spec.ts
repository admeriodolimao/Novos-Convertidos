import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosOsNovosConvertidosPage } from './todos-os-novos-convertidos.page';

describe('TodosOsNovosConvertidosPage', () => {
  let component: TodosOsNovosConvertidosPage;
  let fixture: ComponentFixture<TodosOsNovosConvertidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodosOsNovosConvertidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
