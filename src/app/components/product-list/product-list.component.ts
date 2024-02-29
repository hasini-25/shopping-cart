import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products!: any[];
  @Input() categories!: string[];
  @Input() filteredProducts: any[] = [];

  constructor(private cartService: CartService) { }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
  
}