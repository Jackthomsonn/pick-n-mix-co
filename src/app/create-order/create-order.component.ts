import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: [ './create-order.component.scss' ]
})
export class CreateOrderComponent implements OnInit {
  public orderCreated: boolean;

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    const checkoutSessionToken = JSON.parse(localStorage.getItem('checkoutSessionToken'));
    const sweetIds = this.cartService.cart.map(c => c.selectedSweetsForThisOrder);
    this.http.post(`http://192.168.0.21:3000/api/createOrder?stripe_address_reference=${ checkoutSessionToken }`, {
      data: {
        lineItems: {
          create: (this.cartService.cart as any).map(c => {
            return {
              product: {
                connect: {
                  stripeProductReference: c.price_data.product
                }
              },
              productOptions: {
                create: c.selectedSweetsForThisOrder.map(selectedSweetId => {
                  return {
                    inventoryItem: {
                      connect: {
                        id: selectedSweetId
                      }
                    }
                  };
                })
              }
            };
          })
        }
      }
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(() => {
      localStorage.removeItem('cart');
      this.orderCreated = true;
    }, (e) => {
      this.orderCreated = true;
    });
  }
}
