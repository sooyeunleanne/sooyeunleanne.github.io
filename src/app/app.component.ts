import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ProfileComponent, ProjectsComponent, ExperiencesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sooyeunleanne.github.io';

  @ViewChild('cursor') cursor!: ElementRef;

  top: any;
  left: any;
  expand = false;

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top=($event.pageY - 25)+ "px";
    this.left= ($event.pageX - 25)+ "px";
 }

  changeCursorStyle(color: string) {
    const cursorElement = this.cursor.nativeElement;
    cursorElement.style.backgroundColor = color;
    cursorElement.style.boxShadow = '0px 0px 40px 40px ' + color;
  }

  resetCursorStyle() {
    const cursorElement = this.cursor.nativeElement;
    cursorElement.style.backgroundColor = 'rgba(252, 255, 85, 0.3)'; // Reset to default color
    cursorElement.style.boxShadow = '0px 0px 40px 40px rgba(252, 255, 85, 0.3)'; // Reset to default box shadow
  }

}
