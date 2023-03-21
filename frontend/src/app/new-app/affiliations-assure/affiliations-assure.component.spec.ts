import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationsAssureComponent } from './affiliations-assure.component';

describe('AffiliationsAssureComponent', () => {
  let component: AffiliationsAssureComponent;
  let fixture: ComponentFixture<AffiliationsAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliationsAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliationsAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
