import { Routes } from '@angular/router';
import { BalconyComponent } from './frames/balcony/balcony.component';
import { OfficeComponent } from './frames/office/office.component';
import { LivingRoomComponent } from './frames/living-room/living-room.component';
import { MyRoomComponent } from './frames/my-room/my-room.component';

export const routes: Routes = [
  { path: '', component: BalconyComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'my-room', component: MyRoomComponent },
  // Wildcard route for a 404 page
  { path: '**', redirectTo: '' }
];
