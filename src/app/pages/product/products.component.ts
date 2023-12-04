import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductItem,
} from '../../components/product/product-item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [ProductItem, CommonModule, RouterOutlet],
})
export class Products {
  onRemove = (id: number) => {
    this.products = this.products.filter((product) => product.id !== id);
  };

  products: Product[] = [
    { id: 1, name: 'product 1', size: 10 },
    { id: 2, name: 'product 2', size: 10 },
  ];
}
