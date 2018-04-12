import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgClass } from '@angular/common';
import { MenuLabels } from '../../constants/menulabels';
// import * as _ from "underscore";
import { Fonts } from "../../app/fonts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mainmenu_labels = MenuLabels;
  fontsImage = Fonts;
  
  constructor(public navCtrl: NavController) {
    this.initializeMenu();
  }

  initializeMenu(){
    
  }

}
