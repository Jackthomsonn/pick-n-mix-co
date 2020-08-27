import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: any[];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cart = [];
    }
  }

  public addTocart(item: any) {
    this.cart.push(item);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public removeFromCart(item) {
    const index = this.cart.indexOf(item);

    this.cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public startCheckoutSession() {
    const finalCart = this.cart.map(item => {
      return {
        quantity: item.quantity,
        price_data: item.price_data
      };
    });

    return this.http.post(`${ environment.api_uri }/api/createCheckoutSession`, JSON.stringify(finalCart), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
