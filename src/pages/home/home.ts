import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Keyboard } from '@ionic-native/keyboard';
import { Platform } from 'ionic-angular';
import * as _ from 'underscore/underscore';
import { MenuLabels, NewGameLabels, LoadGameLabels, OptionsLabels, QuitGameLabels, TutorialsLabels } from '../../constants/menulabels';
import { images } from "../../constants/images";
import { audios } from "../../constants/audios";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
    mainmenu_labels = MenuLabels;
    images = images;
    audios = audios;
    flow = [];

    constructor(private elRef: ElementRef, private nativeAudio: NativeAudio, private keyboard: Keyboard, public platform: Platform) { }

    ngAfterViewInit() {
        this.nativeAudio.preloadComplex('menu', this.audios['menu'], 1, 0, 0);
        // this.nativeAudio.loop('menu');
    }


    action(param) {
        var instance = this;
        switch (param) {
            case 'new game':
                this.breadcrumbFlow(this.mainmenu_labels)
                this.mainmenu_labels = NewGameLabels;
                break;
            case 'tutorials':
                this.breadcrumbFlow(this.mainmenu_labels)
                this.mainmenu_labels = TutorialsLabels;
                break;
            case 'save game':
                this.breadcrumbFlow(this.mainmenu_labels)
                break;
            case 'load game':
                this.breadcrumbFlow(this.mainmenu_labels)
                this.mainmenu_labels = LoadGameLabels;
                break;
            case 'options':
                this.breadcrumbFlow(this.mainmenu_labels)
                this.mainmenu_labels = OptionsLabels;
                setTimeout(() => {
                    var slider = instance.Slider('volumebar1', 'volumebar0', 50, instance.sliderUpdate);
                }, 0);
                break;
            case 'credits':
                this.breadcrumbFlow(this.mainmenu_labels)
                break;
            case 'help':
                this.breadcrumbFlow(this.mainmenu_labels)
                break;
            case 'quit game':
                this.breadcrumbFlow(this.mainmenu_labels)
                this.mainmenu_labels = QuitGameLabels;
                break;
            case 'exit':
            case 'exit_no':
                this.mainmenu_labels = this.flow[this.flow.length - 1];
                this.flow.pop()
                break;
            case 'password':
                this.mainmenu_labels = _.each(this.mainmenu_labels, function(obj) {
                    if (obj.name == 'password') {
                        // Todo
                        if (obj.keywords[obj.keywords.length - 1].indexOf('hyphen_brown_small') > -1) {
                            instance.keyboard.show();
                            // obj.keywords.slice(0, 8);
                        } else {
                            var array = ['empty_image_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small']
                            _.each(array, function(arr) {
                                obj.keywords.push(arr)
                            })
                        }
                    }
                });
            case 'exit_yes':
                this.platform.exitApp();
                break;
        }
    }

    sliderUpdate(percentage) {
        console.log(percentage);
    }

    Slider(buttonCssId, sliderCssId, initialPercentage, progressUpdate) {
        var halfButtonWidth = 5;
        var sliderMoving = false;
        var buttonElement = this.elRef.nativeElement.querySelector('.' + buttonCssId);
        var sliderElement = this.elRef.nativeElement.querySelector('.' + sliderCssId);
        // var length = sliderElement.clientWidth;
        var length = 335;
        var leftPos = 0;
        var rightPos = leftPos + length;
        length = rightPos - leftPos;

        if (initialPercentage) {
            var buttonPos = leftPos + initialPercentage / 100 * length;
            buttonElement.style.left = buttonPos - halfButtonWidth + 'px';
        }

        // buttonElement.addEventListener('mousedown', function () {
        //   sliderMoving = true;
        // });

        // sliderElement.addEventListener('mousemove', function (event) {
        //   if (sliderMoving == true) {
        //     var rect = sliderElement.getBoundingClientRect();
        //     var mouseX = event.clientX - rect.left;
        //     var prop = mouseX / length;
        //     if (prop < 0) {
        //       prop = 0;
        //       mouseX = 0;
        //     }
        //     if (prop > 1) {
        //       prop = 1;
        //       mouseX = length;
        //     }
        //     buttonElement.style.left = leftPos + prop * length - halfButtonWidth + 'px';
        //     // progressUpdate(prop * 100);
        //   }
        // });
        // document.addEventListener('mouseup', function () {
        //   sliderMoving = false;
        // });
        sliderElement.addEventListener('click', function (event) {
            var value = length / 10;
            var clickCordinate = event.offsetX;
            var buttonPosition = buttonElement.offsetLeft;
            buttonPosition = buttonPosition < 0 ? 1 : buttonPosition;
            var prop = clickCordinate / buttonPosition || 1;
            if (prop > 1) {
                buttonElement.style.left = buttonPosition + value + 'px';
            }
            if (prop < 1) {
                buttonElement.style.left = buttonPosition - value + 'px';
            }
        });
    }

    breadcrumbFlow(param) {
        this.flow.push(param)
    }

}
