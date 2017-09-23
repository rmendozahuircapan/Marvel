import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  comic;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comic = navParams.data.comic;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
