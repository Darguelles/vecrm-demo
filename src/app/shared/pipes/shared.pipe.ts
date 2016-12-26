
import {Component} from '@angular/core';

@Component({
  selector: 'pipes'
})
// Component controller
class SharedPipe {
  date: Date;

  constructor() {
    this.date = new Date();
  }
}