import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './areas/app/app.component';
import { config } from './areas/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
