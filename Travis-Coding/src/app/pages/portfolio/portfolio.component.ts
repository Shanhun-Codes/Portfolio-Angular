import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from "./portfolio-header/portfolio-header.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, PortfolioHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
