import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // For responsive design
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'; // Sidenav component
import { MatToolbarModule } from '@angular/material/toolbar'; // Toolbar component
import { MatIconModule } from '@angular/material/icon'; // Icons
import { MatButtonModule } from '@angular/material/button'; // Buttons
import { MatListModule } from '@angular/material/list'; // List items

import { RouterModule, RouterOutlet } from '@angular/router'; // Routing
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

// Define the menuType type for menu items
type menuType = {
  link: string; // Route path
  title: string; // Display name
  icon: string; // Material icon name
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule, // Angular Material Sidenav
    MatToolbarModule, // Angular Material Toolbar
    MatIconModule, // Angular Material Icons
    MatButtonModule, // Angular Material Buttons
    MatListModule, // Angular Material List
    MatTooltipModule,
    RouterModule, // Angular Router
    RouterOutlet, // Router Outlet for dynamic content
    CommonModule
  ],
  templateUrl: './app.component.html', // Template file
  styleUrls: ['./app.component.scss'] // Styles file
})
export class AppComponent {
  isMobileScreen = false; // Tracks whether the screen is in mobile mode
  isSidenavOpen = true; // Initialize to true for desktop


  @ViewChild('sidenav') sidenav!: MatSidenav; // Access the sidenav component

  // Example menu list using the menuType type
  menuList: menuType[] = [
    { link: '/about', title: 'About', icon: 'info' },
    { link: '/work', title: 'Works', icon: 'build' },
    { link: '/contact', title: 'Contact', icon: 'mail' },
    { link: '/blog', title: 'Blog', icon: 'article' },
    { link: '/gallery', title: 'Gallery', icon: 'photo' },
    { link: '/profile', title: 'Profile', icon: 'person' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobileScreen = result.matches;
      if (this.isMobileScreen) {
        this.isSidenavOpen = false; // Close sidenav on mobile
      } else {
        this.isSidenavOpen = true; // Open sidenav on desktop
      }
    });
  }

  onSidenavToggle(opened: boolean) {
    // Update the isSidenavOpen property when the sidenav's opened state changes.
    this.isSidenavOpen = opened;
  }

}
