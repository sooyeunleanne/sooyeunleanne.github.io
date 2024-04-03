import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { ExperiencePopupComponent } from './experience-popup/experience-popup.component';
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, AppModule, ExperienceItemComponent, ExperiencePopupComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences: any[] = [];
  popupList: { [key: string]: boolean } = { };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/experiences.json').subscribe(data => {
      this.experiences = Object.values(data); // Convert object to array
    });
    this.experiences.reverse();
    for (const experience of this.experiences) {
      this.popupList[experience.organization] = false;
    }
  }

  handlePopupOpen(eventData: {experienceName: string, open: boolean}) {
    this.popupList[eventData.experienceName] = eventData.open;
  }

  handlePopupClose(eventData: {experienceName: string, open: boolean}) {
    this.popupList[eventData.experienceName] = eventData.open;
  }

}
