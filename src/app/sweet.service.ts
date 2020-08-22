import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {
  public selectedSweetIds: string[] = [];
  public amountOfSweetsToBeSelected: number;
  public onChange: Subject<any> = new Subject();

  public updateSelectedSweets(selectedSweetId: string, type: string) {
    if (type === 'increment') {
      this.selectedSweetIds.push(selectedSweetId);
    } else {
      const index = this.selectedSweetIds.indexOf(selectedSweetId);
      this.selectedSweetIds.splice(index, 1);
    }

    this.onChange.next({
      type: 'sweetSelected',
      value: this.selectedSweetIds.length
    });

    this.onChange.next({
      type: 'checkValidity',
      value: this.selectedSweetIds.length >= this.amountOfSweetsToBeSelected
    });
  }

  public reset() {
    this.selectedSweetIds = [];
  }
}
