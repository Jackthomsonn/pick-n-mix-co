import { filter, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`${ environment.api_uri }/api/getProducts`).pipe(map((products: any[]) => products.filter(p => p.active)));
  }

  public getProduct(productId: string) {
    return this.http.get(`${ environment.api_uri }/api/getProduct?productId=${ productId }`).pipe(filter((product: any) => product.active));
  }
}
