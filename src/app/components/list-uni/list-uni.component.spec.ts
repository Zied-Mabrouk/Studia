import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniComponent } from './list-uni.component';

describe('ListUniComponent', () => {
  let component: ListUniComponent;
  let fixture: ComponentFixture<ListUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
