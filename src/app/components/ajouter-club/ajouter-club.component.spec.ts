import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClubComponent } from './ajouter-club.component';

describe('AjouterClubComponent', () => {
  let component: AjouterClubComponent;
  let fixture: ComponentFixture<AjouterClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
