import { Component, Input } from '@angular/core';

import { SweetsService } from 'src/app/services/sweet.service';

@Component({
  selector: 'app-sweet-item',
  templateUrl: './sweet-item.component.html',
  styleUrls: [ './sweet-item.component.scss' ]
})
export class SweetItemComponent {
  private maxAllowed: number;

  @Input() inventoryItem: any;
  @Input() maxSweetsForProduct: number;
  public amountSelected: number;

  constructor(private sweetsService: SweetsService) {
    this.maxAllowed = 2;

    this.amountSelected = 0;
  }

  public decrement() {
    if (this.amountSelected === 0) {
      return;
    }

    this.amountSelected--;

    this.sweetsService.updateSelectedSweets(this.inventoryItem.id, 'decrement');
  }

  public increment() {
    if (
      this.amountSelected >= this.maxAllowed ||
      this.amountSelected >= this.inventoryItem.quantity ||
      this.sweetsService.selectedSweetIds.length >= this.maxSweetsForProduct
    ) {
      return;
    }

    this.amountSelected++;

    this.sweetsService.updateSelectedSweets(this.inventoryItem.id, 'increment');
  }
}
