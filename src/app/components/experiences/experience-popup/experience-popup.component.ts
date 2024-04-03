import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-experience-popup',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './experience-popup.component.html',
  styleUrl: './experience-popup.component.css'
})
export class ExperiencePopupComponent {
  @Output() popupClose = new EventEmitter<{experienceName: string, open: boolean}>();
  @Input() experience!: any;

  closePopup(): void {
    this.popupClose.emit({ experienceName: this.experience.organization, open: false });
  }
}
