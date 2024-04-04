import { ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private elementRef: ElementRef) { }

  scrollToProfile() {
    const appComponent = this.elementRef.nativeElement.parentElement;
    const profileComponent = appComponent.querySelector('#profile');
    if (profileComponent) {
      profileComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects() {
    const appComponent = this.elementRef.nativeElement.parentElement;
    const projectComponent = appComponent.querySelector('#projects');
    if (projectComponent) {
      projectComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExperiences() {
    const appComponent = this.elementRef.nativeElement.parentElement;
    const experiencesComponent = appComponent.querySelector('#experiences');
    if (experiencesComponent) {
      experiencesComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
