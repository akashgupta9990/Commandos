import { Component, ElementRef } from '@angular/core';
import { MenuLabels, NewGameLabels, LoadGameLabels, OptionsLabels, QuitGameLabels } from '../../constants/menulabels';
import { images } from "../../constants/fonts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mainmenu_labels = MenuLabels;
  fontsImage = images;

  constructor(private elRef: ElementRef) { }

  clickLabels(param) {
    var instance = this;
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
        setTimeout(() => {
          var slider = instance.Slider('volumebar1', 'volumebar0', 50, instance.sliderUpdate);
        }, 0);
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
      // default:
      //   this.mainmenu_labels = MenuLabels;
      //   break;
    }
  }

  // playAudio(audioPath) {
  //   var audio = new Audio();
  //   audio.src = audioPath;
  //   audio.load();
  //   audio.play();
  // }

    sliderUpdate(percentage) {
      console.log(percentage);
    }

    Slider (buttonCssId, sliderCssId, initialPercentage, progressUpdate) {
      var halfButtonWidth = 5;
      var sliderMoving = false;
      var buttonElement = this.elRef.nativeElement.querySelector('.' + buttonCssId);
      var sliderElement = this.elRef.nativeElement.querySelector('.' + sliderCssId);
      var containerElement = this.elRef.nativeElement.querySelector('.volumebar');
      // var length = sliderElement.clientWidth;
      var length = 335;
      var leftPos = 0;
      var rightPos = leftPos + length;
      length = rightPos - leftPos;

      if (initialPercentage) {
        var buttonPos = leftPos + initialPercentage / 100 * length;
        buttonElement.style.left = buttonPos - halfButtonWidth + 'px';
      }

      buttonElement.addEventListener('mousedown', function () {
        sliderMoving = true;
      });

      sliderElement.addEventListener('mousemove', function (event) {
        if (sliderMoving == true) {
          var rect = sliderElement.getBoundingClientRect();
          var mouseX = event.clientX - rect.left;
          var prop = mouseX / length;
          if (prop < 0) {
            prop = 0;
            mouseX = 0;
          }
          if (prop > 1) {
            prop = 1;
            mouseX = length;
          }
          buttonElement.style.left = leftPos + prop * length - halfButtonWidth + 'px';
          // progressUpdate(prop * 100);
        }
      });
      document.addEventListener('mouseup', function () {
        sliderMoving = false;
      });
      containerElement.addEventListener('click', function (event) {
        var rect = sliderElement.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var prop = mouseX / length;
        buttonElement.style.left = leftPos + prop * length + 'px';
      });
    }

}
