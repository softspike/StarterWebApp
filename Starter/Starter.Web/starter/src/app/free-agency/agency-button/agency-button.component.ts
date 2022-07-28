import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-button',
  templateUrl: './agency-button.component.html',
  styleUrls: ['./agency-button.component.scss']
})
export class AgencyButtonComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}
