import { Injectable } from '@angular/core';
import { Product } from '../data/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }

  addToCart = (product: Product) => {
    this.items.push(product);
  };

  getItems = (): Product[] => {
    return this.items;
  };

  clearCart = (): Product[] => {
    this.items = [];
    return this.items;
  };
}
