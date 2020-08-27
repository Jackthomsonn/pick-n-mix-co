import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { SweetsService } from './../sweet.service';
import { ThrowStmt } from '@angular/compiler';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
  public product: any;
  public isValid: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private sweetsService: SweetsService,
    private router: Router
  ) { }

  public addToCart() {
    this.cartService.addTocart({
      productName: this.product.name,
      selectedSweetsForThisOrder: this.sweetsService.selectedSweetIds,
      quantity: 1,
      price_data: {
        product: this.product.stripeProductReference,
        currency: 'gbp',
        unit_amount: this.product.price
      }
    });

    this.sweetsService.reset();

    this.router.navigate([ 'cart' ]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(q => {
      this.productService.getProduct(q.get('productId'))
        .pipe(
          shareReplay({ bufferSize: 1, refCount: true }),
        )
        .subscribe((product: any) => {
          if (!product.name.includes('Create your own')) {
            this.isValid = true;
          }
          this.sweetsService.amountOfSweetsToBeSelected = product.amountOfSweets;
          this.product = product;
        });
    });

    this.sweetsService.onChange.subscribe(response => {
      if (response.type === 'checkValidity') {
        this.isValid = response.value;
      }
    });
  }
}
