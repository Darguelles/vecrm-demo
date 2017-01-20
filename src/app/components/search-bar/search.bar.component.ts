import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: 'search.bar.component.html',
})
export class SearchBarComponent {
  // TODO put attribute list to <a> element (href)
  // TODO define an action attribute for the search button
  @Input() widhtSearchBar: string = '80%';
  @Input() widhtButtonBar: string = '20%';

}
