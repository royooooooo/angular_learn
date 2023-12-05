import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductItem,
} from '../../components/product/product-item.component';
import { RouterOutlet } from '@angular/router';
import { products } from '../../data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [ProductItem, CommonModule, RouterOutlet],
})
export class Products {
  products: Product[] = [...products];
  onRemove = (id: number) => {
    this.products = this.products.filter((product) => product.id !== id);
  };
}
