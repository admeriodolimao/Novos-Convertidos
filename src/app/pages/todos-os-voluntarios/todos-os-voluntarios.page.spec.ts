import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosOsVoluntariosPage } from './todos-os-voluntarios.page';

describe('TodosOsVoluntariosPage', () => {
  let component: TodosOsVoluntariosPage;
  let fixture: ComponentFixture<TodosOsVoluntariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodosOsVoluntariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
