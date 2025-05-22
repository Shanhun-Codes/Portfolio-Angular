import {
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ToolCardComponent } from '../../../shared/templates/tool-card/tool-card.component';
import { Project } from '../../../shared/models/project.model';
import { ProjectService } from '../../../shared/services/project.service';
import { TechItem } from '../../../shared/models/techItem.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ToolCardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  projectService = inject(ProjectService);
  p = input<Project>();
  isActive = input<boolean>(false);
  toggle = output<void>();

  techStack!: TechItem[];
  showImage = false;

  changingIndex = signal<number>(0);
  randomImg = computed(() => {
    return this.p()!.imageUrls[this.changingIndex()];
  });
  
  ngOnInit(): void {
    if (this.p()) {
      this.techStack = this.projectService.getMatchedTechStack(this.p()!);
    }
  
  }
}
