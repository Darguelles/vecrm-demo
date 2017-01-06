import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'req-opened-report',
  templateUrl: 'req.opened.report.component.html',
})
export class ReqOpenedReportComponent {

  @Input() days: number = 0;
  @Input() date: string = '';
  @Input() criticalRequest: number = 0;
  @Input() expirationRequest: number = 0;
  @Input() totalRequest: number = 0;

}
