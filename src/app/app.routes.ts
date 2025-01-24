import { Routes } from '@angular/router';
import { LoginComponent } from './LOGICIEL/app-connexion/app/login/login.component';
import { DashboardComponent } from './LOGICIEL/PAGES/dashboard/dashboard.component';
import { PrincipaleComponent } from './LOGICIEL/PAGES/principale/principale.component';
import { FormulaireComponent } from './LOGICIEL/PAGES/formulaire/formulaire.component';

export const routes: Routes = [
  // Route pour la page de connexion
  { path: '', component: LoginComponent },

  // Route principale avec enfants
  {
    path: 'dashboard', 
    component: PrincipaleComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Enfant pour le tableau de bord
      { path: 'formulaire', component: FormulaireComponent }, // Enfant pour le formulaire
    ],
  },


];
