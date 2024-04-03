import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppModule } from '../../../app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [AppModule, CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Output() popupOpen = new EventEmitter<{experienceName: string, open: boolean}>();
  @Input() experience!: any;

  openPopup(): void {
    this.popupOpen.emit({ experienceName: this.experience.organization, open: true });
  }
}
