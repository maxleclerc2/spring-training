import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './toh/heroes/heroes.component';
import { HeroDetailComponent } from './toh/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './toh/dashboard/dashboard.component';
import { HeroSearchComponent } from './toh/hero-search/hero-search.component';

import { FicheCreationSurcomplementaireAssureComponent } from './new-app/fiche-creation-surcomplementaire-assure/fiche-creation-surcomplementaire-assure.component';
import { RechercheAssureComponent } from './new-app/recherche-assure/recherche-assure.component';
import { InformationsAssureComponent } from './new-app/informations-assure/informations-assure.component';
import { AffiliationsAssureComponent } from './new-app/affiliations-assure/affiliations-assure.component';
import { RibAssureComponent } from './new-app/rib-assure/rib-assure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FicheCreationSurcomplementaireAssureComponent,
    RechercheAssureComponent,
    InformationsAssureComponent,
    AffiliationsAssureComponent,
    RibAssureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
