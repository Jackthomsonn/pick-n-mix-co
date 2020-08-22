import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private readonly URI: string = 'http://192.168.0.21:3000';

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`${ this.URI }/api/getProducts`);
  }

  public getProduct(productId: string) {
    return this.http.get(`${ this.URI }/api/getProduct?productId=${ productId }`);
  }
}
