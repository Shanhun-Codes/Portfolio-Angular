import { Component, inject } from '@angular/core';
import about from '../../shared/staticData/about';
import { AboutService } from '../../shared/services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutService = inject(AboutService);
  aboutData = this.aboutService.aboutData;
}
