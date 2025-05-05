import { Component, inject, AfterViewInit, ViewChild, OnInit, signal } from '@angular/core';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectService } from '../../shared/services/project.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [

    PortfolioHeaderComponent,
    ProjectCardComponent,

  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent  {
  projectService = inject(ProjectService);
  projects = this.projectService.projects
  activeProjectId: number | null = null;


  setActiveProject(id: number) {
    this.activeProjectId = this.activeProjectId === id ? null : id;
  }
}
