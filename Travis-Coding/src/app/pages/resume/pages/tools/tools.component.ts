import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import { ResumeCardComponent } from '../../shared/templates/resume-card/resume-card.component';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [ResumeCardComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
techStackService = inject(TechStackService)
toolsData = this.techStackService.getTools()
}
