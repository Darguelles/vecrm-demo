import { Component, OnInit } from '@angular/core';
import {Column} from '../grid/Column';



@Component({
    moduleId: module.id.toString(),
    selector: 'customer-view',
    templateUrl: 'customer-view.component.html'
})

export class CustomerViewComponent {
    
    cases: Array<Case>;
    caseColumns: Array<Column>;
    orders: Array<Order>;
    orderColumns: Array<Column>;

    constructor() {

        this.cases = this.getCases();
        this.caseColumns = this.getCaseColumns();
              this.orders = this.getOrders();
        this.orderColumns = this.getOrderColumns();
    }
    
    getCases(): Array<Case> {
        return [
            {caseId:'2014080912366',title:'DHS HV Case',dueDate:'015-01-03', category: 'High Voltage', createdBy: 'Bryan Barbour', assignedTo: 'dale.barbour@verizon.com', status: 'completed'},
            {caseId:'2014080912366',title:'DHS HV Case',dueDate:'015-01-03', category: 'High Voltage', createdBy: 'Bryan Barbour', assignedTo: 'dale.barbour@verizon.com', status: 'completed'},
            {caseId:'2014080912366',title:'DHS HV Case',dueDate:'015-01-03', category: 'Other', createdBy: 'Balaji Anarhachari', assignedTo: 'balaji.x.anachari@verizon.com', status: 'New'},
            {caseId:'2014080912366',title:'DHS HV Case',dueDate:'015-01-03', category: 'Calling Campaign', createdBy: 'Manuel Francia', assignedTo: 'mfrancia@verizon.com', status: 'New'},
        ];
    }

    getCaseColumns(): Array<Column> {
        return [
            new Column('caseId','Case ID'),
            new Column('title','Title'),
            new Column('dueDate','Due Date'),
            new Column('category','Category'),
            new Column('createdBy','Created By'),
            new Column('assignedTo','Assigned To'),
            new Column('status','Status')
            
        ];
    }
    
    getOrders(): Array<Order> {
        return [
            {orderId:'560793',circuitId:'W187787',lconA:'015-01-03', lconB: 'High Voltage', customerRequestedDate: 'Bryan Barbour', vzCommittedDate: 'dale.barbour@verizon.com'},
            {orderId:'560793',circuitId:'W187787',lconA:'015-01-03', lconB: 'High Voltage', customerRequestedDate: 'Bryan Barbour', vzCommittedDate: 'dale.barbour@verizon.com'},
            {orderId:'560793',circuitId:'W187787',lconA:'015-01-03', lconB: 'Other', customerRequestedDate: 'Balaji Anarhachari', vzCommittedDate: 'balaji.x.anachari@verizon.com'},
            {orderId:'560793',circuitId:'W187787',lconA:'015-01-03', lconB: 'Calling Campaign', customerRequestedDate: 'Manuel Francia', vzCommittedDate: 'mfrancia@verizon.com'},
        ];
    }

    getOrderColumns(): Array<Column> {
        return [
            new Column('orderId','Order ID'),
            new Column('circuitId','Circuit ID'),
            new Column('lconA','Lcon A'),
            new Column('lconB','Lcon B'),
            new Column('customerRequestedDate','Customer Requested Due Date'),
            new Column('vzCommittedDate','Vz Committed Due Date')
            
        ];
    }
  
}
interface Case {
    caseId:string;
    title:string;
    dueDate: string;
    category: string;
    createdBy: string;
    assignedTo: string;
    status: string;
}

interface Order {
    orderId:string;
    circuitId:string;
    lconA: string;
    lconB: string;
    customerRequestedDate: string;
    vzCommittedDate: string
    
}