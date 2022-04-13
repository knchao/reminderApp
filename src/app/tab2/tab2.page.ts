import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { EventsAndAlerts } from '../tabs/EventAndAlert-data';
import { IEventAndAlert } from '../interface/ievent-and-alert';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  thisEventsAndAlerts: IEventAndAlert[];
  thisEventAndAlert:IEventAndAlert;

  // buttonText: string[];

  thisDate:string;
  thisALertMsg:string;





  constructor(private alertCntl:AlertController) {

    // this.buttonText = [];
  
    // console.log(EventsAndAlerts.length); 
    // for (let i = 0; i < EventsAndAlerts.length; i++) {
    //   this.buttonText.push(EventsAndAlerts[i].alertDateString);
    //   console.log(this.buttonText[i]);
    // }

  this.thisEventsAndAlerts = EventsAndAlerts;
  
  }


  async detailedAlert(eventNumber: number) {
    this.thisEventAndAlert = EventsAndAlerts[eventNumber-1];
    this.thisDate = formatDate(this.thisEventAndAlert.alertDateString, 'YYYY-MM-dd','en-ca');
    this.thisALertMsg = this.thisEventAndAlert.aLertMsg;

    const alert = await this.alertCntl.create({
      header: 'Reminder',
      subHeader: this.thisDate,
      message: this.thisALertMsg,
      buttons: ['Okay'],
      cssClass: "classAlert",
   
    });

    await alert.present();
  }
}
