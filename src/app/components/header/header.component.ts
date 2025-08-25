
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
  @Input() side: 'left' | 'right' = 'right'; // default right

  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to route changes so currentRoute updates dynamically
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
