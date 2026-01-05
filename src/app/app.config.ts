import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import {
  provideRouter,
} from '@angular/router';
import { Home } from './home/home';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    ErrorHandler,
    provideHttpClient(),
    provideStore(),
    provideRouter(
      [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: Home },
        {
          path: 'claims',
          loadChildren: () =>
            import('./micro-services/claims/claims.routes').then((m) => m.routes),
        },
        {
          path: 'tollings',
          loadChildren: () =>
            import('./micro-services/tollings/tollings.routes').then((m) => m.routes),
        },
      ],
    )
  ],
};
