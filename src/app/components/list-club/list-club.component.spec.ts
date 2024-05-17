import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClubComponent } from './list-club.component';

describe('ListClubComponent', () => {
  let component: ListClubComponent;
  let fixture: ComponentFixture<ListClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
