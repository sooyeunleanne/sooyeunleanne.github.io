import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LivingRoomComponent } from '../../frames/living-room/living-room.component';

@Component({
  selector: 'app-ec',
  standalone: true,
  imports: [CommonModule, LivingRoomComponent],
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.css']
})
export class EcComponent {
  ecs: any = {};
  orgKeys: string[] = [];
  openOrgKey: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/ec.json').subscribe(data => {
      this.ecs = data;
      this.orgKeys = Object.keys(data);
    });
  }

  openEcTimeline(orgKey: string) {
    this.openOrgKey = orgKey;
  }
}
