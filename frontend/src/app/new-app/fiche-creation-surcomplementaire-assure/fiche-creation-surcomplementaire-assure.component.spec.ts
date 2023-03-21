import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCreationSurcomplementaireAssureComponent } from './fiche-creation-surcomplementaire-assure.component';

describe('FicheCreationSurcomplementaireAssureComponent', () => {
  let component: FicheCreationSurcomplementaireAssureComponent;
  let fixture: ComponentFixture<FicheCreationSurcomplementaireAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCreationSurcomplementaireAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheCreationSurcomplementaireAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
