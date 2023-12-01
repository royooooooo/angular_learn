import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Products } from './app/pages/product/products.component';

bootstrapApplication(Products, appConfig)
  .catch((err) => console.error(err));
