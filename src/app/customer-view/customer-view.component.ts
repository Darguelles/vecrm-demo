import {Component, AfterViewChecked, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {Column} from '../grid/column.ts';

let Packery = require('packery');
let Draggabilly = require('draggabilly');
let imagesLoaded = require('imagesloaded');

Packery.prototype.getShiftPositions = function (attrName) {
  attrName = attrName || 'id';
  var _this = this;
  return this.items.map(function (item) {
    return {
      attr: item.element.getAttribute(attrName),
      x: item.rect.x / _this.packer.width
    }
  });
};

Packery.prototype.initShiftLayout = function (positions, attr) {
  if (!positions) {
    // if no initial positions, run packery layout
    this.layout();
    return;
  }
  // parse string to JSON
  if (typeof positions == 'string') {
    try {
      positions = JSON.parse(positions);
    } catch (error) {
      console.error('JSON parse error: ' + error);
      this.layout();
      return;
    }
  }

  attr = attr || 'id'; // default to id attribute
  this._resetLayout();
  // set item order and horizontal position from saved positions
  this.items = positions.map(function (itemPosition) {
    var selector = '[' + attr + '="' + itemPosition.attr + '"]'
    var itemElem = this.element.querySelector(selector);
    var item = this.getItem(itemElem);
    item.rect.x = itemPosition.x * this.packer.width;
    return item;
  }, this);
  this.shiftLayout();
};

declare var jQuery: any;

@Component({
  moduleId: module.id.toString(),
  selector: 'customer-view',
  templateUrl: 'customer-view.component.html',
})
export class CustomerViewComponent implements AfterViewInit {

  cases: Array<Case>;
  caseColumns: Array<Column>;
  orders: Array<Order>;
  orderColumns: Array<Column>;
  messages: Array<User>;
  // showStyle: Boolean = false;

  // Report
  serviceRequestData: number[];
  serviceRequestColours: string[];
  changeRequestData: number[];
  changeRequestColours: string[];


  constructor(public element: ElementRef) {

    // this.pckry = this.pckry;
    this.cases = this.getCases();
    this.caseColumns = this.getCaseColumns();
    this.orders = this.getOrders();
    this.orderColumns = this.getOrderColumns();
    this.messages = this.getUserMessages();
    this.serviceRequestData = this.getServiceRequestData();
    this.serviceRequestColours = this.getServiceRequestColours();
    this.changeRequestData = this.getChangeRequestData();
    this.changeRequestColours = this.getChangeRequestColours();

  }

  // getStyle() {
  //   if(this.showStyle) {
  //     return "inline";
  //   } else {
  //     return "none";
  //   }
  // }
  //
  // getHamburger() {
  //   if(this.showStyle) {
  //     return "open";
  //   } else {
  //     return "";
  //   }
  // }



  ngAfterViewInit() {

    var grid = document.querySelector('.grid');
    let pckry;

    imagesLoaded(grid, function () {
      pckry = new Packery(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        // rowHeight: 100,
        percentPosition: true,
        initLayout: false, // disable initial layout
        // gutter: 5
      });

      // get saved dragged positions
      var initPositions = localStorage.getItem('dragPositions');
// init layout with saved positions
      pckry.initShiftLayout(initPositions, 'data-item-id');

      // DRAGGABLE EFFECT
      pckry.getItemElements().forEach(function (itemElem) {
        var draggie = new Draggabilly(itemElem);
        pckry.bindDraggabillyEvents(draggie);
      });

      // save drag positions on event
      pckry.on('dragItemPositioned', function () {
        var positions = pckry.getShiftPositions('data-item-id');
        // save drag positions
        localStorage.setItem('dragPositions', JSON.stringify(positions));
      });

    });
  }


  getServiceRequestData(): Array<number> {
    return [60, 70, 80, 100, 200, 250, 300, 541, 150]
  }

  getServiceRequestColours(): Array<string> {
    return [
      '#ff672b',
      '#ef6833',
      '#dd6a3d',
      '#d56d45',
      '#d97d59',
      '#c67a5d',
      '#dd9073',
      '#eda386',
      '#f3b8a1',
    ]
  }

  getChangeRequestData(): Array<number> {
    return [54, 26, 12, 8]
  }

  getChangeRequestColours(): Array<string> {
    return [
      '#2b1ab4',
      '#2f32d4',
      '#2d27eb',
      '#3348eb',
      '#4961e2',
      '#357de2',
      '#3694ff',
      '#39c9ff',
      '#0ce1ff',
    ]
  }

  getCases(): Array<Case> {
    return [
      {
        caseId: '12014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '22014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '32014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Other',
        createdBy: 'Balaji Anarhachari',
        assignedTo: 'balaji.x.anachari@verizon.com',
        status: 'New',
        class: 'table-danger'
      },
      {
        caseId: '42014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Calling Campaign',
        createdBy: 'Manuel Francia',
        assignedTo: 'mfrancia@verizon.com',
        status: 'New',
        class: 'table-warning'
      },
      {
        caseId: '52014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '62014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Other',
        createdBy: 'Balaji Anarhachari',
        assignedTo: 'balaji.x.anachari@verizon.com',
        status: 'New',
        class: 'table-danger'
      },
      {
        caseId: '72014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Calling Campaign',
        createdBy: 'Manuel Francia',
        assignedTo: 'mfrancia@verizon.com',
        status: 'New',
        class: 'table-warning'
      },

      {
        caseId: '82014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '92014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Other',
        createdBy: 'Balaji Anarhachari',
        assignedTo: 'balaji.x.anachari@verizon.com',
        status: 'New',
        class: 'table-danger'
      },
      {
        caseId: '102014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Calling Campaign',
        createdBy: 'Manuel Francia',
        assignedTo: 'mfrancia@verizon.com',
        status: 'New',
        class: 'table-warning'
      },
      {
        caseId: '112014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '122014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Other',
        createdBy: 'Balaji Anarhachari',
        assignedTo: 'balaji.x.anachari@verizon.com',
        status: 'New',
        class: 'table-danger'
      },
      {
        caseId: '132014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Calling Campaign',
        createdBy: 'Manuel Francia',
        assignedTo: 'mfrancia@verizon.com',
        status: 'New',
        class: 'table-warning'
      }
      ,
      {
        caseId: '142014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'High Voltage',
        createdBy: 'Bryan Barbour',
        assignedTo: 'dale.barbour@verizon.com',
        status: 'completed',
        class: 'table-success'
      },
      {
        caseId: '152014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Other',
        createdBy: 'Balaji Anarhachari',
        assignedTo: 'balaji.x.anachari@verizon.com',
        status: 'New',
        class: 'table-danger'
      },
      {
        caseId: '162014080912366',
        title: 'DHS HV Case',
        dueDate: '015-01-03',
        category: 'Calling Campaign',
        createdBy: 'Manuel Francia',
        assignedTo: 'mfrancia@verizon.com',
        status: 'New',
        class: 'table-warning'
      }
    ];
  }

  getCaseColumns(): Array<Column> {
    return [
      new Column('caseId', 'Case ID'),
      new Column('title', 'Title'),
      new Column('dueDate', 'Due Date'),
      new Column('category', 'Category'),
      new Column('createdBy', 'Created By'),
      new Column('assignedTo', 'Assigned To'),
      new Column('status', 'Status')

    ];
  }

  getOrders(): Array<Order> {
    return [
      {
        orderId: '560793',
        circuitId: 'W187787',
        lconA: '015-01-03',
        lconB: 'High Voltage',
        customerRequestedDate: 'Bryan Barbour',
        vzCommittedDate: 'dale.barbour@verizon.com'
      },
      {
        orderId: '560793',
        circuitId: 'W187787',
        lconA: '015-01-03',
        lconB: 'High Voltage',
        customerRequestedDate: 'Bryan Barbour',
        vzCommittedDate: 'dale.barbour@verizon.com'
      },
      {
        orderId: '560793',
        circuitId: 'W187787',
        lconA: '015-01-03',
        lconB: 'Other',
        customerRequestedDate: 'Balaji Anarhachari',
        vzCommittedDate: 'balaji.x.anachari@verizon.com'
      },
      {
        orderId: '560793',
        circuitId: 'W187787',
        lconA: '015-01-03',
        lconB: 'Calling Campaign',
        customerRequestedDate: 'Manuel Francia',
        vzCommittedDate: 'mfrancia@verizon.com'
      },
    ];
  }

  getOrderColumns(): Array<Column> {
    return [
      new Column('orderId', 'Order ID'),
      new Column('circuitId', 'Circuit ID'),
      new Column('lconA', 'Lcon A'),
      new Column('lconB', 'Lcon B'),
      new Column('customerRequestedDate', 'Customer Requested Due Date'),
      new Column('vzCommittedDate', 'Vz Committed Due Date')

    ];
  }

  getUserMessages(): Array<User> {
    return [
      {
        company: 'Company XYZ',
        userName: 'Michael Brown',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'I have heard the Company XYZ is about to close the purchase of Company J, wich has tree offices in Richmond VA. Anyone heard a definite date for completion the purchase?',
        time: 'Today at 11:44 AM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Luisa Martinez',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'I have uploaded a file showing XYZs new sales organization structure in their CA region. Anyone have an up to date one for TX? FYI',
        time: 'Yesterday at 6:32 PM',
        attachDocument: 'SO-Structure.docx (104 KB)',
        attachReceiver: '@Scott Smith'
      },
      {
        company: 'Company XYZ',
        userName: 'Mary Jones',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'Spoke to VP Johnson, he wants more details on our Managed Pip offering. Who can help me with this?',
        time: 'Yesterday at 4:07 PM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Michael Brown',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'I have heard the Company XYZ is about to close the purchase of Company J, wich has tree offices in Richmond VA. Anyone heard a definite date for completion the purchase?',
        time: 'Today at 11:44 AM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Mary Jones',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'Spoke to VP Johnson, he wants more details on our Managed Pip offering. Who can help me with this?',
        time: 'Yesterday at 4:07 PM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Michael Brown',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'I have heard the Company XYZ is about to close the purchase of Company J, wich has tree offices in Richmond VA. Anyone heard a definite date for completion the purchase?',
        time: 'Today at 11:44 AM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Mary Jones',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'Spoke to VP Johnson, he wants more details on our Managed Pip offering. Who can help me with this?',
        time: 'Yesterday at 4:07 PM',
        attachDocument: '',
        attachReceiver: ''
      },
      {
        company: 'Company XYZ',
        userName: 'Michael Brown',
        imageUri: 'http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png',
        message: 'I have heard the Company XYZ is about to close the purchase of Company J, wich has tree offices in Richmond VA. Anyone heard a definite date for completion the purchase?',
        time: 'Today at 11:44 AM',
        attachDocument: '',
        attachReceiver: ''
      },
    ]
  }

}
interface Case {
  caseId: string;
  title: string;
  dueDate: string;
  category: string;
  createdBy: string;
  assignedTo: string;
  status: string;
  class: string;
}

interface Order {
  orderId: string;
  circuitId: string;
  lconA: string;
  lconB: string;
  customerRequestedDate: string;
  vzCommittedDate: string
}

interface User {
  company: string;
  userName: string;
  imageUri: string;
  message: string;
  time: string;
  attachDocument: string;
  attachReceiver: string;
}

