import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() categories!: string[];
  @Input() cartAdd: number = 0;
  @Input() products!: any[];
  @Output() filteredProducts = new EventEmitter<any>();

  constructor(private productService: ProductService) { }

  filterByCategory(category: string): void {
    if (category === 'all') {
      this.filteredProducts.emit(this.products);
    } else {
      this.filteredProducts.emit(this.products.filter(product => product.category === category));
    }
  }

}
