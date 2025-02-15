import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterModuleComponent } from './ajouter-module.component';

describe('AjouterModuleComponent', () => {
  let component: AjouterModuleComponent;
  let fixture: ComponentFixture<AjouterModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
