import { Component, Input } from '@angular/core';

interface Product {
  name: String;
  size: number;
}

@Component({
  selector: 'product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
})
export class ProductItem {
  @Input() product?: Product;
}
