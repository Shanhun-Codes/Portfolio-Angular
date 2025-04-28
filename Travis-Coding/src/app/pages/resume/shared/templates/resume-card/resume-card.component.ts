import { Component, input } from '@angular/core';
import TechStack from '../../../../../shared/models/techStack.model';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  imports: [],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.css'
})
export class ResumeCardComponent {
name = input<string>()
imgPath = input<string>()
}
