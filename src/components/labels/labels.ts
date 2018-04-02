import { Component } from '@angular/core';

/**
 * Generated class for the LabelsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'labels',
  templateUrl: 'labels.html'
})
export class LabelsComponent {

  text: string;

  constructor() {
    console.log('Hello LabelsComponent Component');
    this.text = 'Hello World';
  }

}
