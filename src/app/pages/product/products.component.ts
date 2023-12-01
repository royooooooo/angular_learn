import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../../components/product/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [ProductItem, CommonModule],
})
export class Products {
  products = [
    { name: 'product 1', size: 10 },
    { name: 'product 2', size: 10 },
  ];
}
