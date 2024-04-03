import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../../app.module';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [AppModule, CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  popup: boolean = false;

  openPopup(): void {
    this.popup = true;
  }

  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/projects.json').subscribe(data => {
      this.projects = Object.values(data); // Convert object to array
    });
  }
}
