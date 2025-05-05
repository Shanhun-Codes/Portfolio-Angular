import { Component, inject } from '@angular/core';
import { TechStackService } from '../../../../shared/services/techStack.service';
import { ToolCardComponent } from '../../../../shared/templates/tool-card/tool-card.component';
import { CardGroupComponent } from "../../../../shared/templates/card-group/card-group.component";

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [ToolCardComponent, CardGroupComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
techStackService = inject(TechStackService)
toolsData = this.techStackService.getTools()
}
