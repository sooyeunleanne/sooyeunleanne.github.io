import { Component } from '@angular/core';
import { AppModule } from '../../app.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OfficeComponent } from "../../frames/office/office.component";
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AppModule, CommonModule, OfficeComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projects: any[] = [];
  popupList: { [key: string]: boolean } = { };
  openProject: any;
  showText: { [key: string]: boolean } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/projects.json').subscribe(data => {
      this.projects = Object.values(data); // Convert object to array
      this.projects.reverse();
      for (const project of this.projects) {
        this.popupList[project.name] = false;
      }
    });
  }

  openProjectDescription(projectName: string): void {
    this.openProject = this.projects.find(p => p.name === projectName) || null;
  }

  onLinkClick(link: string): void {
    if (link) {
      window.open(link, '_blank'); // open in a new tab
    }
  }

  onGithubLinkClick(githubLink: string): void {
    if (githubLink) {
      window.open(githubLink, '_blank'); // open in a new tab
    }
  }

  onDevpostLinkClick(devpostLink: string): void {
    if (devpostLink) {
      window.open(devpostLink, '_blank'); // open in a new tab
    }
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    this.showText[img.alt] = true;
  }

}
