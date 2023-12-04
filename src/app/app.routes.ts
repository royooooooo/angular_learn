import { Routes } from '@angular/router';
import { Products } from './pages/product/products.component';

export const routes: Routes = [
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];
