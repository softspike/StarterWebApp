import { Component } from '@angular/core';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  message: string;

  constructor(private callService: CallService) { }


  public getHi() {
   this.callService.get()
   .subscribe((response: any) => {
    this.message = response.text;
  },
  (error: any) => {
    console.log("it's baaaaaad")
  });
  }
}

