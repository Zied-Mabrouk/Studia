import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateequipeComponent } from './createequipe.component';

describe('CreateequipeComponent', () => {
  let component: CreateequipeComponent;
  let fixture: ComponentFixture<CreateequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
