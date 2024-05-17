import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnsModuleComponent } from './list-ens-module.component';

describe('ListEnsModuleComponent', () => {
  let component: ListEnsModuleComponent;
  let fixture: ComponentFixture<ListEnsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
