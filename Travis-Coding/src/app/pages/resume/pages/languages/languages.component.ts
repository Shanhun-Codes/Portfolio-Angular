import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import {TechItem} from '../../../../shared/models/techItem.model';
import { ToolCardComponent } from '../../../../shared/templates/tool-card/tool-card.component';
import { CardGroupComponent } from "../../../../shared/templates/ng-content/card-group/card-group.component";

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ToolCardComponent, CardGroupComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
techStackService = inject(TechStackService)

languages: TechItem[] = this.techStackService.getLanguages()
}
