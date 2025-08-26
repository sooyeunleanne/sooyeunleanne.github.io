import { Component, EventEmitter, Output } from '@angular/core';
import { PageSettingsService } from '../../services/page-settings.service';

@Component({
    selector: 'app-my-room',
    imports: [],
    templateUrl: './my-room.component.html',
    styleUrl: './my-room.component.css'
})
export class MyRoomComponent {
  @Output() journalClicked = new EventEmitter<void>();
  @Output() polaroidClicked = new EventEmitter<void>();

  constructor(private pageSettings: PageSettingsService) {}

  ngOnInit() {
    this.pageSettings.setPage('my-room-background', 'right');
  }

  handleJournalClick() {
    this.journalClicked.emit();
  }

  handlePolaroidClick() {
    this.polaroidClicked.emit();
  }
}
