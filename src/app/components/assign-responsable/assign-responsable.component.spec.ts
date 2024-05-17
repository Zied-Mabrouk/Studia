import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignResponsableComponent } from './assign-responsable.component';

describe('AssignResponsableComponent', () => {
  let component: AssignResponsableComponent;
  let fixture: ComponentFixture<AssignResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
