import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' by default
  { path: '**', redirectTo: '/home' } // Wildcard route for undefined paths
];
