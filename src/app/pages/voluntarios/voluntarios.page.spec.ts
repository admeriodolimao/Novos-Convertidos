import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoluntariosPage } from './voluntarios.page';

describe('VoluntariosPage', () => {
  let component: VoluntariosPage;
  let fixture: ComponentFixture<VoluntariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoluntariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
