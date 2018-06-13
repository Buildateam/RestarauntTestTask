import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Restaraunt } from '../../api/server/models';
import { RestsService } from '../../services/restaraunt-service';

@Component({
  templateUrl: 'restaraunt-info.html'
})
export class RestarauntInfoPage implements OnInit {
  restaraunt: Restaraunt;
  title: string;
  description: string;

  constructor(navParams: NavParams, private navCtrl: NavController) {
    this.restaraunt = <Restaraunt>navParams.get('restaraunt');
    this.title = this.restaraunt.title;
    this.description = this.restaraunt.description;
  }

  ngOnInit() {
  }

  save() {
    this.restaraunt.description = this.description;
    RestsService.save(this.restaraunt);
    this.navCtrl.pop();
  }
}
