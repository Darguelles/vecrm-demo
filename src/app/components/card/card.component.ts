import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
})
export class CardComponent {
  @Input() header: string = 'this is header';
  // @Input() footer: string = 'this is footer';
}
