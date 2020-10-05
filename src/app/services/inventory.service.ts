import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private http: HttpClient) { }

  public getInventory() {
    return this.http.get(`${ environment.api_uri }/api/getInventory`);
  }
}
