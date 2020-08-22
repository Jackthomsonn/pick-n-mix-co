import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  public products: any[];

  constructor(private productService: ProductService, private router: Router) { }

  public goToProductPage(product: any) {
    this.router.navigate([ `product/${ product.id }` ], {
      state: { product }
    });
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products: any) => this.products = products);
  }
}