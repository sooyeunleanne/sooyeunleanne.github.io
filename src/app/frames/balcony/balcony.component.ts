import { Component, OnInit } from '@angular/core';
import { PageSettingsService } from '../../services/page-settings.service';

@Component({
  selector: 'app-balcony',
  standalone: true,
  imports: [],
  templateUrl: './balcony.component.html',
  styleUrl: './balcony.component.css'
})
export class BalconyComponent {
  constructor(private pageSettings: PageSettingsService) {}

  ngOnInit() {
    this.pageSettings.setPage('balcony-background', 'right');
  }

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
