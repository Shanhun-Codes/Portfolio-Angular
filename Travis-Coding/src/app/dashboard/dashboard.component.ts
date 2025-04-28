import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../shared/templates/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/templates/footer/footer.component';
import { HeaderComponent } from "../shared/templates/header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  column: string = '';
  windowWidth: number = window.innerWidth;

  constructor() {
    this.setColumnText()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
    this.setColumnText()
  }

  setColumnText() {
    if (this.windowWidth < 600) {
      this.column = 'Travis Shanhun | Software Engineer | Travis Shanhun';
    } else {
      this.column = 'Software Engineer - Educator - Full-Stack';
    }
  }
}
