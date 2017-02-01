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
  currentPage: number = 1;

  leftArrowClass: string = '';
  rightArrowClass: string = '';

  sorter: Sorter;
  recordsOptions = [10, 15 , 20];
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
    this.currentPage = 1;
    this.showArrows()
  }

  showArrows() {
    this.leftArrowClass = '';
    this.rightArrowClass = '';

    if (this.rows.length <= this.totalRowsPage) {
      this.rightArrowClass = 'blocked'
    }
    if (this.currentPage == this.totalPages) {
      this.rightArrowClass = 'blocked'
    }
    if (this.currentPage == 1) {
      this.leftArrowClass = 'blocked'
    }
  }

  sort(key) {
    this.sorter.sort(key, this.rows);
  }

  changeRowsQuantity(rows) {

    let newNumberOfRows = parseInt(rows);

    let oldRowsPerPage = this.totalRowsPage;

    let indexes = [];
    this.rowsTable = [];
    this.totalRowsPage = newNumberOfRows

    if (this.currentPage == 1 || this.rows.length <= this.totalRowsPage) {

      this.rows.forEach((item, index) => {
        if (index >= this.indexOfCurrentPageFirstRow && index <= (newNumberOfRows - 1)) {
          this.rowsTable.push(item);
          indexes.push(index);
        }
      });

      this.totalPages = this.calculateNumberOfPages();
//  Update indexes
      this.indexOfCurrentPageFirstRow = indexes[0];
      this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

    }
    else {

      // DEBO SABER CUANTOS REGISTROS VOY HASTA EL MOMENTO
      let totalRecordsReaded = oldRowsPerPage * this.currentPage

      if (totalRecordsReaded > this.rows.length) {
        totalRecordsReaded = this.rows.length;
      }

      let pageCounter = 1;
      while (totalRecordsReaded > newNumberOfRows) {
        if (totalRecordsReaded > newNumberOfRows) {
          newNumberOfRows = newNumberOfRows + this.totalRowsPage
          pageCounter++;
        }
      }

      this.totalPages = this.calculateNumberOfPages();

      this.goToPageNumber(pageCounter);

      this.currentPage = pageCounter;

    }

    this.showArrows();

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

      let currentIndex = this.indexOfCurrentPageLastRow;
      let indexes = [];
      this.rowsTable = [];
      this.rows.forEach((item, index) => {
        if (index > currentIndex && indexes.length < (this.totalRowsPage)) {
          this.rowsTable.push(item);
          indexes.push(index);
        }
      });

      this.indexOfCurrentPageFirstRow = indexes[0];
      this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

      this.currentPage = this.currentPage + 1;
      this.showArrows();
    }
  }

  goToBackPage() {
    let totalRows = this.rows.length;
    if (totalRows <= this.totalRowsPage) {
      this.currentPage = 1;
    } else {

      let currentIndex = this.indexOfCurrentPageFirstRow;
      let indexes = [];
      this.rowsTable = [];

      this.rows.forEach((item, index) => {
        if (index < currentIndex && indexes.length < (this.totalRowsPage) && index >= (this.totalRowsPage * (this.currentPage - 2))) {
          this.rowsTable.push(item);
          indexes.push(index);
        }
      });

      this.indexOfCurrentPageFirstRow = indexes[0];
      this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

      this.currentPage = this.currentPage - 1;
      this.showArrows();
    }

  }

  goToPageNumber(number) {

    if (number < 0 || number > this.totalPages) {
      this.currentPage = this.currentPage;
      return this.currentPage;
    }

    let indexes = [];
    this.rowsTable = [];

    let indexStart = this.totalRowsPage * number - 1


    if (indexStart > this.rows.length) {
      indexStart = indexStart - this.totalRowsPage
    }
    let counter = 1;
    this.rows.forEach((item, index) => {
      if (index >= (indexStart) && counter <= this.totalRowsPage) {
        this.rowsTable.push(item);
        indexes.push(index);
        counter++;
      }
    });

    this.indexOfCurrentPageFirstRow = indexes[0];
    this.indexOfCurrentPageLastRow = indexes[indexes.length - 1];

  }


}
