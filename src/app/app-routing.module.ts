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
  },
  {
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
  {
    path: 'find-institutions-form',
    loadChildren: () => import('./all-pages/find-institutions-form/find-institutions-form.module').then( m => m.FindInstitutionsFormPageModule)
  },
  {
    path: 'mbbs-abroad',
    loadChildren: () => import('./all-pages/mbbs-abroad/mbbs-abroad.module').then( m => m.MbbsAbroadPageModule)
  },
  {
    path: 'panel-discussion',
    loadChildren: () => import('./all-pages/panel-discussion/panel-discussion.module').then( m => m.PanelDiscussionPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./all-pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'explore-exam',
    loadChildren: () => import('./all-pages/explore-exam/explore-exam.module').then( m => m.ExploreExamPageModule)
  }
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
