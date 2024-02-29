import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  categories: string[] = [];
  products: any[] = [];
  cartAdd: number = 0;
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  filteredByProducts(event:any){
    this.filteredProducts = event
    console.log('filteredProducts',this.filteredProducts)
  }
}
