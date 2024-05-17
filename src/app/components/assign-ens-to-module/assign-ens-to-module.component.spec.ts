import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEnsToModuleComponent } from './assign-ens-to-module.component';

describe('AssignEnsToModuleComponent', () => {
  let component: AssignEnsToModuleComponent;
  let fixture: ComponentFixture<AssignEnsToModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEnsToModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEnsToModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
