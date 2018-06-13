import { Component } from '@angular/core';
import { Restaraunt } from '../../api/server/models';
import { RestsService } from '../../services/restaraunt-service';
import { NavController } from 'ionic-angular';
import { RestarauntInfoPage } from '../information/restaraunt-info';

@Component({
  templateUrl: 'restaraunts.html'
})
export class RestarauntsPage {
  restaraunts;
  currentFilter :string;
  constructor(private navCtrl: NavController) {
  }

  showRestarauntInfo(restaraunt): void {
    this.navCtrl.push(RestarauntInfoPage, {restaraunt});
  }

  deleteRestaraunt(rest: Restaraunt): void {
    RestsService.delete(rest._id).subscribe(()=>{
      this.restaraunts = RestsService.getRestarauntsByFilter(this.currentFilter);
    });
  }

  onSearchInput(value) {
    this.currentFilter = value;
    this.restaraunts = RestsService.getRestarauntsByFilter(value);
  }

  ngOnInit() {
      this.restaraunts = RestsService.getRestarauntsByFilter('');
  }
}
