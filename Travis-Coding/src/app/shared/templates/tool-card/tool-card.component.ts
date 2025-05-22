import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [],
  templateUrl: './tool-card.component.html',
  styleUrl: './tool-card.component.css',
})
export class ToolCardComponent {
  size = input<'small' | 'default'>('default');
  imgPath = input<string>();
  name = input();
}
