import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './toh/dashboard/dashboard.component';
import { HeroesComponent } from './toh/heroes/heroes.component';
import { HeroDetailComponent } from './toh/hero-detail/hero-detail.component';
import { FicheCreationSurcomplementaireAssureComponent }
    from './new-app/fiche-creation-surcomplementaire-assure/fiche-creation-surcomplementaire-assure.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'creation-surcomplementaire-assure', component: FicheCreationSurcomplementaireAssureComponent },
  { path: 'creation-surcomplementaire-assure/:id', component: FicheCreationSurcomplementaireAssureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
