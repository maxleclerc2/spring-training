import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibAssureComponent } from './rib-assure.component';

describe('RibAssureComponent', () => {
  let component: RibAssureComponent;
  let fixture: ComponentFixture<RibAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RibAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
