import { Component, OnInit } from '@angular/core';
import { PageSettingsService } from '../../services/page-settings.service';

@Component({
    selector: 'app-living-room',
    imports: [],
    templateUrl: './living-room.component.html',
    styleUrl: './living-room.component.css'
})
export class LivingRoomComponent {
  constructor(private pageSettings: PageSettingsService) {}

  ngOnInit() {
    this.pageSettings.setPage('living-room-background', 'left');
  }
}
