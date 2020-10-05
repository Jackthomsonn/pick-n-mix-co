import { StripeCheckout, StripeModule } from 'ngx-stripe-checkout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageModule } from './pages/page.module';
import { StripeCheckoutModule } from 'ng9-stripe-checkout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    DeviceDetectorModule,
    HttpClientModule,
    StripeCheckoutModule,
    StripeModule,
    PageModule,
  ],
  providers: [
    StripeCheckout
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
