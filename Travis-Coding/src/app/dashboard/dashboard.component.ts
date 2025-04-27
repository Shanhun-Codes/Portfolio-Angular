import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/templates/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/templates/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  column: string = 'Software Engineer - Educator - Fullstack ';
}
