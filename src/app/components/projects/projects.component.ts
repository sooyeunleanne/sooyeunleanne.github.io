import { Component } from '@angular/core';
import { AppModule } from '../../app.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectPopupComponent } from './project-popup/project-popup.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, ProjectPopupComponent, AppModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projects: any[] = [];
  popupList: { [key: string]: boolean } = { };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/projects.json').subscribe(data => {
      this.projects = Object.values(data); // Convert object to array
    });
    for (const project of this.projects) {
      this.popupList[project.name] = false;
    }
  }

  handlePopupOpen(eventData: {projectName: string, open: boolean}) {
    this.popupList[eventData.projectName] = eventData.open;
  }

  handlePopupClose(eventData: {projectName: string, open: boolean}) {
    this.popupList[eventData.projectName] = eventData.open;
  }

}
