import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgClass } from '@angular/common';
import { Mainmenu } from '../../constants/mainmenu';
// import * as _ from "underscore";
import { Fonts } from "../../app/fonts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mainmenu_labels = Mainmenu;
  fontsImage = Fonts;
  
  constructor(public navCtrl: NavController) {
    this.initializeMenu();
  }

  initializeMenu(){
    
  }

}
