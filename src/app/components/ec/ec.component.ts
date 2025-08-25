import { Component } from '@angular/core';
import { LivingRoomComponent } from '../../frames/living-room/living-room.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-ec',
  standalone: true,
  imports: [LivingRoomComponent, CommonModule, TimelineModule],
  templateUrl: './ec.component.html',
  styleUrl: './ec.component.css'
})
export class EcComponent {
  ecs: any = {};          // full JSON data
  orgKeys: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/ec.json').subscribe(data => {
      this.ecs = data;
      this.orgKeys = Object.keys(data).reverse(); // keys in reverse order
      console.log(this.ecs);
    });
  }
}
