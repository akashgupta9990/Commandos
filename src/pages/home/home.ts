import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  getUrl() {
    return "url('../assets/main_menu.bmp')";
  }
  
  constructor(public navCtrl: NavController) {

  }

}
