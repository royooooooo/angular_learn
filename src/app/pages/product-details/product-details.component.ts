import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../data/products';
import { CartService } from '../../services/cart.service';
import { Logger } from '../../../utils/logger.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private logger: Logger
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('productId');
    this.product = products.find((item) => item.id.toString() === id);
  }

  addToCart = (product: Product) => {
    this.cartService.addToCart(product);
    this.logger.log(`put product ${product.id} to cart`);
    window.alert('Your product has been added to the cart!')
  };
}
