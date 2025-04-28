import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import TechStack from '../../../../shared/models/techStack.model';
import { ResumeCardComponent } from '../../shared/templates/resume-card/resume-card.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ResumeCardComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
techStackService = inject(TechStackService)

languages: TechStack['languages'] = this.techStackService.getLanguages()
}
