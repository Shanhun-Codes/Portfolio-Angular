import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentEmail: string = 'shanhun.codes@gmail.com';

  copyToClipboardHandler() {
    navigator.clipboard
      .writeText(this.currentEmail)
      .then(() => this.showCopiedAnimation())
      .catch((e) => alert('Failed to copy please try again'));
  }

  showCopiedAnimation() {
    const copiedMessage = document.getElementById('copiedMessage');
    if (copiedMessage) {
      copiedMessage.classList.add('show');
      setTimeout(() => {
        copiedMessage.classList.remove('show');
      }, 1500);
    }
  }
}
