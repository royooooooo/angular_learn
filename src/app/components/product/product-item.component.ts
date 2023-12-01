import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: String;
  size: number;
}

@Component({
  selector: 'product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  imports: [CommonModule],
})
export class ProductItem {
  @Input() product?: Product;
  @Output() remove = new EventEmitter<number>();
}
