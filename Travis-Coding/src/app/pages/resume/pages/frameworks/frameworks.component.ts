import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import { ToolCardComponent } from '../../../../shared/templates/tool-card/tool-card.component';
import { ToolsComponent } from "../tools/tools.component";
import { CardGroupComponent } from "../../../../shared/templates/ng-content/card-group/card-group.component";

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [ToolCardComponent, ToolsComponent, CardGroupComponent],
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css'
})
export class FrameworksComponent {
techStackService = inject(TechStackService)
frameworkData = this.techStackService.getFrameworks().sort()
}
