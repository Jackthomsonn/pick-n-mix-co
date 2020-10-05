import { Component, Input, OnInit } from '@angular/core';

import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-sweet-selector',
  templateUrl: './sweet-selector.component.html',
  styleUrls: [ './sweet-selector.component.scss' ]
})
export class SweetSelectorComponent implements OnInit {
  @Input() maxSweetsForProduct: number;

  public inventory: any[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((inventory: any) => {
      this.inventory = inventory;
    });
  }
}
