import { Component, OnInit } from '@angular/core';
import { PageSettingsService } from '../../services/page-settings.service';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent {
  constructor(private pageSettings: PageSettingsService) {}

  ngOnInit() {
    this.pageSettings.setPage('office-background', 'left');
  }
}
