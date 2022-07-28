import { Component } from '@angular/core';

@Component({
  selector: 'block-temp',
  styles: [`
    :host {
      text-align: center;
      color: #1976D2;
    }
    .block-ui-template {
      position: fixed;
      top: 40%;
      margin: 0 auto;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      background-color: rgba(0,0,0,0.3);
      height: 120%;
    }
  `],
  template: `
    <div class="block-ui-template">
      <i class="fa fa-github-alt fa-4x" aria-hidden="true"></i>
      <div><strong>{{message}}</strong></div>
    </div>
  `
})
export class BlockTemplateComponent {
  message: any;BlockTemplateComponent
}