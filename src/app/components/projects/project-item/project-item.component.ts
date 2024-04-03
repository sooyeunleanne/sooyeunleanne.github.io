import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../../app.module';
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [AppModule, CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Output() popupOpen = new EventEmitter<{projectName: string, open: boolean}>();
  @Input() project!: any;

  openPopup(): void {
    this.popupOpen.emit({ projectName: this.project.name, open: true });
  }
}
