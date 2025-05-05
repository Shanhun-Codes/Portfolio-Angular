import { inject, Injectable, OnInit, signal } from '@angular/core';
import PROJECT_DATA from '../data/project';
import { Project } from '../models/project.model';
import { TechStackService } from './techStack.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  techStackService = inject(TechStackService);
  projects = signal<Project[]>(PROJECT_DATA);

  getMatchedTechStack(project: Project) {
    const techNames = project.technologies;
    const allTech = [
      ...this.techStackService.getLanguages(),
      ...this.techStackService.getFrameworks(),
      ...this.techStackService.getTools(),
    ];
  
    return techNames.map((name) =>
      allTech.find((tech) => tech.name.toLowerCase() === name.toLowerCase())
    ).filter((t) => !!t);
  }
}
