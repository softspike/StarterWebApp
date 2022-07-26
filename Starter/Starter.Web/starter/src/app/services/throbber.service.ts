import { Injectable } from '@angular/core';
import { NgBlockUI, BlockUIService, BlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class ThrobberService {
  @BlockUI() blockUI: NgBlockUI;

  block() {
    this.blockUI.start();
  }

  unblock() {
    this.blockUI.stop();
  }
}
