import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
import { appConfig } from './app/app.config';
import { ErrorHandler, provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ErrorHandler,
    provideZonelessChangeDetection(),
    ...appConfig.providers
  ]
});
