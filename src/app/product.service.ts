import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`${ environment.api_uri }/api/getProducts`);
  }

  public getProduct(productId: string) {
    return this.http.get(`${ environment.api_uri }/api/getProduct?productId=${ productId }`);
  }
}
