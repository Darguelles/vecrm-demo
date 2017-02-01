import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'button-container',
  templateUrl: 'button.container.component.html',
})
export class ButtonContainerComponent {
  @Input() title: string = '';
  @Input() buttonClass: string = '';
  @Input() arrowClass: string = '';
  @Input() action: string = '';
}
