import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './areas/app/app.config';
import { AppComponent } from './areas/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
