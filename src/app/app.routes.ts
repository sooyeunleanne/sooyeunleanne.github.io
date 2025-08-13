import { Routes } from '@angular/router';
import { BalconyComponent } from './pages/balcony/balcony.component';
import { OfficeComponent } from './pages/office/office.component';
import { LivingRoomComponent } from './pages/living-room/living-room.component';
import { MyRoomComponent } from './pages/my-room/my-room.component';

export const routes: Routes = [
  { path: '', component: BalconyComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'my-room', component: MyRoomComponent },
  // Wildcard route for a 404 page
  { path: '**', redirectTo: '' }
];
