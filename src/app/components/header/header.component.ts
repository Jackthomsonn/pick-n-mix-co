import { Component, Input, OnInit } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  @Input() showHero: string;

  public showMenu: boolean;
  public isDesktop: boolean;

  constructor(
    private deviceService: DeviceDetectorService,
    private cartService: CartService,
    private router: Router
  ) { }

  public itemsInCart() {
    return this.cartService.cart.length > 0;
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public goToCart() {
    this.router.navigate([ 'cart' ]);
  }

  ngOnInit(): void {
    this.isDesktop = this.deviceService.isDesktop();

    if (!this.showHero) {
      document.documentElement.style.setProperty('--headerHeight', '18vh');
      document.documentElement.style.setProperty('--fontcolor', '#555');
      document.documentElement.style
        .setProperty('--background', '#FFF');
    } else {
      document.documentElement.style.setProperty('--headerHeight', '100vh');
      document.documentElement.style.setProperty('--fontcolor', '#FFF');
      document.documentElement.style
        .setProperty(
          '--background',
          // tslint:disable-next-line: max-line-length
          'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(\'https://cdn.shopify.com/s/files/1/0586/3317/files/sweets-without-2_1800x1000.jpg?v=1538566313\')');
    }
  }
}
