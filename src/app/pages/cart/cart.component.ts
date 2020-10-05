import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  public activeCart: any[];

  constructor(private cartService: CartService) { }

  public removeItemFromCart(cartItem: any) {
    this.cartService.removeFromCart(cartItem);
  }

  public async startCheckoutSession() {
    const stripe = (window as any).Stripe(environment.stripePublicKey);
    this.cartService.startCheckoutSession()
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
      )
      .subscribe(token => {
        localStorage.setItem('checkoutSessionToken', JSON.stringify(token));
        setTimeout(() => {
          stripe.redirectToCheckout({
            sessionId: token
          }).then(() => { });
        }, 0);
      });
  }

  ngOnInit(): void {
    this.activeCart = this.cartService.cart;
  }
}
