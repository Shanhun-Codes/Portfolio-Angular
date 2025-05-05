import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import TechStack from '../../../../shared/models/techStack.model';
import { ToolCardComponent } from '../../../../shared/templates/tool-card/tool-card.component';
import { CardGroupComponent } from "../../../../shared/templates/card-group/card-group.component";

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ToolCardComponent, CardGroupComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
techStackService = inject(TechStackService)

languages: TechStack['languages'] = this.techStackService.getLanguages()
}
