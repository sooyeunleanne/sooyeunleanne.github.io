
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
  activeSection: string = '';

  sections = ['profile', 'projects', 'extracurricular', 'about me']; // IDs of your sections

  navigateTo(componentName: string) {
    document.getElementById(componentName)?.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPos = window.scrollY + 100; // offset to trigger a bit earlier
    for (const sectionId of this.sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
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
