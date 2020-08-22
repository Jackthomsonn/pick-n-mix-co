import { StripeCheckout, StripeModule } from 'ngx-stripe-checkout';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductComponent } from './product/product.component';
import { StripeCheckoutModule } from 'ng9-stripe-checkout';
import { SweetItemComponent } from './sweet-item/sweet-item.component';
import { SweetSelectorComponent } from './sweet-selector/sweet-selector.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    CollectionComponent,
    CartComponent,
    SweetSelectorComponent,
    SweetItemComponent,
    CreateOrderComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule,
    HttpClientModule,
    StripeCheckoutModule,
    StripeModule
  ],
  providers: [
    StripeCheckout
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
