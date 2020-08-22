import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly URI: string = 'http://192.168.0.21:3000';

  constructor(private http: HttpClient) { }

  public getInventory() {
    return this.http.get(`${ this.URI }/api/getInventory`);
  }
}
