import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDepartmentToEtudiantComponent } from './assign-department-to-etudiant.component';

describe('AssignDepartmentToEtudiantComponent', () => {
  let component: AssignDepartmentToEtudiantComponent;
  let fixture: ComponentFixture<AssignDepartmentToEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDepartmentToEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDepartmentToEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
