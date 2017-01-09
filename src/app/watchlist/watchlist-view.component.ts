import {Component} from '@angular/core';
import {Column} from "../grid/column";

@Component({
  moduleId: module.id.toString(),
  selector: 'watchlist-view',
  templateUrl: 'watchlist-view.component.html',
})
export class WatchListViewComponent {

  campaignColumns: Array<Column>;
  campaigns: Array<Campaign>;

  constructor() {
    this.campaignColumns = this.getCampaignColumns();
    this.campaigns = this.getCampaigns();
  }


  getCampaignColumns(): Array<Column> {
    return [
      new Column('customer', 'CUSTOMER'),
      new Column('trigger', 'TRIGGER'),
      new Column('leads', 'LEADS'),
      new Column('diversity', 'DIVERSITY'),
      new Column('pip', 'PIP'),
      new Column('cpe', 'CPE EOL')
    ];
  }

  getCampaigns(): Array<Campaign> {
    return [{
      customer: 'PROCTOR & GAMBLE',
      trigger: 9,
      leads: 2,
      diversity: 0,
      pip: 0,
      cpe: 2
    }, {
      customer: 'MORGAN STANLEY',
      trigger: 10,
      leads: 5,
      diversity: 2,
      pip: 1,
      cpe: 1
    }, {
      customer: 'DPT EDUCATION',
      trigger: 12,
      leads: 7,
      diversity: 1,
      pip: 1,
      cpe: 5
    }, {
      customer: 'GENERAL ELECTRIC',
      trigger: 15,
      leads: 11,
      diversity: 4,
      pip: 3,
      cpe: 4
    }, {
      customer: 'HP',
      trigger: 21,
      leads: 9,
      diversity: 3,
      pip: 2,
      cpe: 4
    }]
  }

}

interface Campaign {
  customer: string;
  trigger: number;
  leads: number;
  diversity: number;
  pip: number;
  cpe: number;
}
