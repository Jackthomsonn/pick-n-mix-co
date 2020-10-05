import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { ComponentModule } from './../components/component.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductComponent } from './product/product.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AboutComponent,
    CartComponent,
    ProductComponent,
    CollectionComponent,
    CreateOrderComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class PageModule { }
