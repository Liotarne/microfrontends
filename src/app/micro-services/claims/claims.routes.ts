import { Routes } from '@angular/router';
import { Claims } from './claims';

export const routes: Routes = [
  { path: '', component: Claims },
  { path: 'details', component: Claims },
];
