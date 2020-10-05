import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProductComponent } from './pages/product/product.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'product/:productId',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'create-order',
    component: CreateOrderComponent
  },
  {
    path: 'policies/terms-of-service',
    component: TermsOfServiceComponent
  }, {
    path: 'policies/privacy-policy',
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
