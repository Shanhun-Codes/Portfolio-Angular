import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  userService = inject(UserService)
  user = this.userService.user;

  copyToClipboardHandler() {
    navigator.clipboard
      .writeText(this.user().email)
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
