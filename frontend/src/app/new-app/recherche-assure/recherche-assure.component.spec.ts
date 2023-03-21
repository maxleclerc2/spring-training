import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAssureComponent } from './recherche-assure.component';

describe('RechercheAssureComponent', () => {
  let component: RechercheAssureComponent;
  let fixture: ComponentFixture<RechercheAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
