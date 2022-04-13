import { Component } from '@angular/core';
import { IEventAndAlert } from '../interface/ievent-and-alert';
import { EventsAndAlerts } from '../tabs/EventAndAlert-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  thisEventsAndAlerts:IEventAndAlert[];

  constructor() {
    this.thisEventsAndAlerts = EventsAndAlerts;
  }

}
