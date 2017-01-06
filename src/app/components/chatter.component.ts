import {Component, Input} from '@angular/core';

@Component({
  selector: 'chatter',
  templateUrl: 'chatter.component.html',
})
export class ChatterComponent {

  @Input() messages:Array<any>;

}
