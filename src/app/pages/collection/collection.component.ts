import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: [ './collection.component.scss' ]
})
export class CollectionComponent implements OnInit {
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
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
      )
      .subscribe((products: any) => this.products = products);
  }
}
