import { Component } from '@angular/core';
import { MenuLabels } from '../../constants/menulabels';
import { NewGameLabels } from '../../constants/menulabels';
import { LoadGameLabels } from '../../constants/menulabels';
import { OptionsLabels } from '../../constants/menulabels';
import { QuitGameLabels } from '../../constants/menulabels';
// import * as _ from "underscore";
import { Fonts } from "../../app/fonts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mainmenu_labels = MenuLabels;
  fontsImage = Fonts;
  
  constructor() {
    this.initializeMenu();
  }

  initializeMenu(){
    
  }

  clickLabels(param) {
    switch (param) {
      case 'new game':
        this.mainmenu_labels = NewGameLabels;
        break;
      case 'save game':
        // this.mainmenu_labels = OptionsLabels;
        break;
      case 'load game':
        this.mainmenu_labels = LoadGameLabels;
        break;
      case 'options':
        this.mainmenu_labels = OptionsLabels;
        break;
      case 'credits':
        // this.mainmenu_labels = OptionsLabels;
        break;
      case 'help':
        // this.mainmenu_labels = OptionsLabels;
        break;
      case 'quit game':
        this.mainmenu_labels = QuitGameLabels;
        break;
      default:
        this.mainmenu_labels = MenuLabels;
        break;
    }
  }

}
