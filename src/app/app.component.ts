import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';

// Define the menuType type
type menuType = {
  link: string;
  title: string;
  icon: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMobileScreen = false;

  // Example menu list using the menuType type
  menuList: menuType[] = [
    { link: '/home', title: 'Home', icon: 'home' },
    { link: '/about', title: 'About', icon: 'info' },
    { link: '/work', title: 'Works', icon: 'build' },
    { link: '/contact', title: 'Contact', icon: 'mail' },
    { link: '/blog', title: 'Blog', icon: 'article' },
    { link: '/gallery', title: 'Gallery', icon: 'photo' },
    { link: '/profile', title: 'Profile', icon: 'person' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobileScreen = result.matches;
    });
  }
}
