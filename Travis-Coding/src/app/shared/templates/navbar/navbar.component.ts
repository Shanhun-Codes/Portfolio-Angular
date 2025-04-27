import { Component } from '@angular/core';
import { PortfolioImgComponent } from '../portfolio-img/portfolio-img.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PortfolioImgComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
