import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import { ResumeCardComponent } from '../../shared/templates/resume-card/resume-card.component';

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [ResumeCardComponent],
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css'
})
export class FrameworksComponent {
techStackService = inject(TechStackService)
frameworkData = this.techStackService.getFrameworks().sort()
}
