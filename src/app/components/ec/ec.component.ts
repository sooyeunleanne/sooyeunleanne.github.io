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
      // Sort each organization's roles so latest startdate comes first
      this.orgKeys.forEach(orgKey => {
        this.ecs[orgKey].roles.sort((a: any, b: any) => {
          const dateA = new Date(a.startdate);
          const dateB = new Date(b.startdate);
          return dateB.getTime() - dateA.getTime(); // latest first
        });
      });
    });
  }

  openEcTimeline(orgKey: string) {
    this.openOrgKey = orgKey;
  }
}
