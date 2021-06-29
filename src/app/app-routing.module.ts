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
  },
  {
    path: 'explore-exam-details',
    loadChildren: () => import('./all-pages/explore-exam-details/explore-exam-details.module').then( m => m.ExploreExamDetailsPageModule)
  },
  {
    path: 'explore-exam-details-inner',
    loadChildren: () => import('./all-pages/explore-exam-details-inner/explore-exam-details-inner.module').then( m => m.ExploreExamDetailsInnerPageModule)
  },
  {
    path: 'country-info',
    loadChildren: () => import('./all-pages/country-info/country-info.module').then( m => m.CountryInfoPageModule)
  },
  {
    path: 'expert-counselling',
    loadChildren: () => import('./all-pages/expert-counselling/expert-counselling.module').then( m => m.ExpertCounsellingPageModule)
  },
  {
    path: 'education-loan-assistance',
    loadChildren: () => import('./all-pages/education-loan-assistance/education-loan-assistance.module').then( m => m.EducationLoanAssistancePageModule)
  },
  {
    path: 'scholarships',
    loadChildren: () => import('./all-pages/scholarships/scholarships.module').then( m => m.ScholarshipsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./all-pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./all-pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
