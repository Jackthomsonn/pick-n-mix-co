import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MarketingService {
  constructor(private http: HttpClient) { }

  public signupForMarketing(email: string) {
    return this.http.post(`${ environment.api_uri }/api/addMarketingEmail`, JSON.stringify({
      data: {
        email
      }
    }), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
