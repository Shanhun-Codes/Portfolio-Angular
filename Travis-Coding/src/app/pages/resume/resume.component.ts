import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {

  downloadResumeHandler() {
    const filePath = '/assets/documents/TravisShanhun-Resume2025.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'TravisShanhun-Resume2025.pdf'; 

   
    link.click();
  }
}
