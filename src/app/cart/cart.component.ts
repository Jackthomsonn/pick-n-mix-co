import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  public activeCart: any[];

  constructor(private cartService: CartService, private router: Router) { }

  public removeItemFromCart(cartItem: any) {
    this.cartService.removeFromCart(cartItem);
  }

  public async startCheckoutSession() {
    const stripe = (window as any).Stripe('pk_test_CSoObVGF1VapNcOz7acWvmcw00lNtjlUbk');
    this.cartService.startCheckoutSession().subscribe(token => {
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
