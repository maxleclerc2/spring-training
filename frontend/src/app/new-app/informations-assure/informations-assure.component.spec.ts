import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsAssureComponent } from './informations-assure.component';

describe('InformationsAssureComponent', () => {
  let component: InformationsAssureComponent;
  let fixture: ComponentFixture<InformationsAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationsAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
