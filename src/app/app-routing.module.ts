import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./all-pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./all-pages/profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'my-institutions',
    loadChildren: () => import('./all-pages/my-institutions/my-institutions.module').then( m => m.MyInstitutionsPageModule)
  },
  {
    path: 'my-activity',
    loadChildren: () => import('./all-pages/my-activity/my-activity.module').then( m => m.MyActivityPageModule)
  },
  {
    path: 'my-alerts',
    loadChildren: () => import('./all-pages/my-alerts/my-alerts.module').then( m => m.MyAlertsPageModule)
  },
  {
    path: 'exam-institutions',
    loadChildren: () => import('./all-pages/exam-institutions/exam-institutions.module').then( m => m.ExamInstitutionsPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
