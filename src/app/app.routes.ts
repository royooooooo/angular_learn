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
        (m) => m.ProductDetailsComponent,
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'shipping',
    loadComponent: () =>
      import('./pages/shipping/shipping.component').then(
        (m) => m.ShippingComponent,
      ),
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];
