import { Component, OnInit } from '@angular/core';
import { PageSettingsService } from '../../services/page-settings.service';

@Component({
    selector: 'app-my-room',
    imports: [],
    templateUrl: './my-room.component.html',
    styleUrl: './my-room.component.css'
})
export class MyRoomComponent {
  constructor(private pageSettings: PageSettingsService) {}

  ngOnInit() {
    this.pageSettings.setPage('my-room-background', 'right');
  }
}
