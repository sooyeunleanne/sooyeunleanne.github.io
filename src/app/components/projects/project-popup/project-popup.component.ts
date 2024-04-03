import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-project-popup',
  standalone: true,
  imports: [AppModule, CommonModule],
  templateUrl: './project-popup.component.html',
  styleUrl: './project-popup.component.css'
})
export class ProjectPopupComponent {
  @Output() popupClose = new EventEmitter<{projectName: string, open: boolean}>();
  @Input() project!: any;

  closePopup(): void {
    this.popupClose.emit({ projectName: this.project.name, open: false });
  }
}
