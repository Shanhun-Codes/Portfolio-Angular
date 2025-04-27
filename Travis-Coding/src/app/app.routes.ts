import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'about', component: AboutComponent },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'resume',
        component: ResumeComponent,
      },
    ],
  },
];
