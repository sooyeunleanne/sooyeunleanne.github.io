import { Component } from '@angular/core';

@Component({
  selector: 'app-balcony',
  standalone: true,
  imports: [],
  templateUrl: './balcony.component.html',
  styleUrl: './balcony.component.css'
})
export class BalconyComponent {
  onInstagramClick() {
    window.open('https://www.instagram.com/sooyeunleanne', '_blank');
  }

  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/sooyeunleanne', '_blank');
  }

  onGithubClick() {
    window.open('https://github.com/sooyeunleanne', '_blank');
  }
}
