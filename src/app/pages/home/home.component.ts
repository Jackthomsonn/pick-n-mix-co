import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MarketingService } from 'src/app/services/marketing.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  public products: any[];
  public email: FormControl;
  public signedUp: boolean;

  constructor(
    private productService: ProductService,
    private router: Router,
    private marketingService: MarketingService
  ) { }

  public goToProductPage(product: any) {
    this.router.navigate([ `product/${ product.id }` ], {
      state: { product }
    });
  }

  public signUpForMarketing() {
    this.marketingService.signupForMarketing(this.email.value).subscribe(() => {
      this.signedUp = true;
    });
  }

  ngOnInit(): void {
    this.email = new FormControl('', [ Validators.email, Validators.required ]);

    this.productService
      .getProducts()
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
      )
      .subscribe((products: any) => this.products = products);
  }
}
