import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LanguagesComponent } from './pages/resume/pages/languages/languages.component';
import { FrameworksComponent } from './pages/resume/pages/frameworks/frameworks.component';
import { ToolsComponent } from './pages/resume/pages/tools/tools.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'resume',
        component: ResumeComponent,
        children: [
            {path: '', redirectTo: 'languages', pathMatch: 'full'},
          { path: 'languages', component: LanguagesComponent },
          { path: 'frameworks', component: FrameworksComponent },
          { path: 'tools', component: ToolsComponent },
        ],
      },
    ],
  },
];
