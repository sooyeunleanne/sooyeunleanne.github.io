import { Component } from '@angular/core';
import { BalconyComponent } from "../../frames/balcony/balcony.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [BalconyComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
