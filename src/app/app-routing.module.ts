import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { AjouterEtudiantComponent } from './components/ajouter-etudiant/ajouter-etudiant.component';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { ListEnseignantComponent } from './components/list-enseignant/list-enseignant.component';
import { ListModuleComponent } from './components/list-module/list-module.component';
import { AjouterModuleComponent } from './components/ajouter-module/ajouter-module.component';
import { ModifierEnseignantComponent } from './components/modifier-enseignant/modifier-enseignant.component';
import { ListEnsModuleComponent } from './components/list-ens-module/list-ens-module.component';
import { AssignEnsToModuleComponent } from './components/assign-ens-to-module/assign-ens-to-module.component';
import { AssignResponsableComponent } from './components/assign-responsable/assign-responsable.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';
import { AjouterClubComponent } from './components/ajouter-club/ajouter-club.component';
import { ListClubComponent } from './components/list-club/list-club.component';
import { UpdateClubComponent } from './components/update-club/update-club.component';
import { AddDepartementComponent } from './components/add-departement/add-departement.component';
import { AddUniComponent } from './components/add-uni/add-uni.component';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
import { ListUniComponent } from './components/list-uni/list-uni.component';
import { UpdateequipeComponent } from './components/updateequipe/updateequipe.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { CreateequipeComponent } from './components/createequipe/createequipe.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'AjouterEtudiant', component: AjouterEtudiantComponent },
  { path: 'AjouterEnseignant', component: AjouterEnseignantComponent },
  { path: 'AjouterModule', component: AjouterModuleComponent },
  { path: 'Enseignantupdate/:idEnseignant',component:ModifierEnseignantComponent},
  { path: 'ListEtudiant', component: ListEtudiantComponent },
  { path: 'ModifierEtudiant/:id', component: AjouterEtudiantComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'update-project/:id', component: AddProjectComponent },
  { path: 'ListEnseignant',
  loadChildren:() => import('./components/enseignant/enseignant.module').then(m=>m.EnseignantModule)},
  
  { path: 'ListClub', component: ListClubComponent },
  { path: 'ListClub',
  loadChildren:() => import('./components/club/club.module').then(m=>m.ClubModule)},


  { path: 'ListModule', component: ListModuleComponent },
  { path: 'ListModule', 
  loadChildren:() => import('./components/module/module.module').then(m=>m.ModuleModule) },
  { path: 'assignEnsModule/:idEnseignant', component: AssignEnsToModuleComponent },
  { path: 'assignResponsable/:idModule', component: AssignResponsableComponent },
  { path: 'AjouterClub', component: AjouterClubComponent },
  {path:'update-club/:id',component:UpdateClubComponent},

  { path: 'AddUni',component: AddUniComponent,},
  { path: 'AjouterDepartement', component: AddDepartementComponent },
  { path: 'ListUni', component: ListUniComponent },
  { path: 'ListDepartment', component: ListDepartmentComponent },
  { path: 'ModifierUni/:id', component: AddUniComponent },
  { path: 'ModifierDepartment/:id', component: AddDepartementComponent },

  {path:'updateequipe/:idEquipe',component:UpdateequipeComponent},
  {path:'equipe',component:EquipeComponent},
  {path:'createequipe',component:CreateequipeComponent},

  { path: '**', component: PagesError404Component }
  
 
];        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
