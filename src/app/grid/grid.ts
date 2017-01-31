import {Component, OnInit} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
  selector: 'grid',
  inputs: ['rows: rows', 'columns: columns'],
  templateUrl: '../grid/grid.html'
})
export class Grid implements OnInit {

  columns: Array<Column>;
  rows: Array<any> = [];
  rowsTable: Array<any> = [];
  currentPage: number = 0;

  sorter: Sorter;
  recordsOptions = [1, 2, 3, 4, 5];
  indexOfCurrentPageFirstRow: number = 0;
  indexOfCurrentPageLastRow: number = 0;

  totalRowsPage: number;

  totalPages: number = 0;

  constructor() {
    this.sorter = new Sorter();
    this.totalRowsPage = this.recordsOptions[0];
  }

  ngOnInit() {
    this.rowsTable = this.changeRowsQuantity(this.recordsOptions[0]);
  }

  sort(key) {
    this.sorter.sort(key, this.rows);
  }

  changeRowsQuantity(numberOfRows) {
    let indexes = [];
    this.rowsTable = [];
    this.totalRowsPage = numberOfRows
    this.rows.forEach((item, index) => {
      if (index >= this.indexOfCurrentPageFirstRow && index <= (numberOfRows - 1)) {
        this.rowsTable.push(item);
        indexes.push(index);
      }
    });
    console.log(indexes);

    this.totalPages = this.calculateNumberOfPages();
//  Update indexes
    this.indexOfCurrentPageFirstRow = indexes[0];
    this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

    return this.rowsTable;
  }

  calculateNumberOfPages() {
    let totalRows = this.rows.length;
    let pages = totalRows / this.totalRowsPage
    return Math.ceil(pages);
  }

  goToNextPage() {
    let totalRows = this.rows.length;
    if (totalRows <= this.totalRowsPage) {
      this.currentPage = 1;
    } else {

      let currentIndex = this.indexOfCurrentPageLastRow + 1;
      let indexes = [];
      this.rowsTable = [];
      this.rows.forEach((item, index) => {
        if (index >= currentIndex && index <= (this.totalRowsPage - 1)) {
          this.rowsTable.push(item);
          indexes.push(index);
        }
      });

      this.indexOfCurrentPageFirstRow = indexes[0];
      this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

      this.currentPage = this.currentPage + 1;
    }
  }

  goToBackPage() {

  }


}
