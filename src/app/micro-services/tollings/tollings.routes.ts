import { Routes } from '@angular/router';
import { Tollings } from './tollings';

export const routes: Routes = [
  { path: '', component: Tollings },
  { path: 'details', component: Tollings },
];
