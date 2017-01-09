import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'order-container',
  templateUrl: 'order.container.component.html',
})
export class OrderContainerComponent {
  @Input() title: string = '';
  @Input() number: number = 0;
  @Input() imageId: string = '';
  @Input() imageSource: string = '';
  @Input() colorNumber: string = '';
}
