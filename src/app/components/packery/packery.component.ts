// /**
//  * Created by ARGUDI7 on 1/11/2017.
//  */
// // import {BlogService} from './blog.service';
// import {Blog} from './blog.model';
// import {Component, ElementRef, OnInit, AfterViewChecked} from '@angular/core';
// // import {LinkyPipe} from '../pipes/linky.pipe';
// declare var Packery: any;
// declare var imagesLoaded: any;
// @Component({
//   moduleId: module.id,
//   selector: 'coco-blog',
//   templateUrl: 'blog.component.html',
//   // providers: [BlogService],
//   // pipes: [LinkyPipe]
// })
// export class BlogComponent implements OnInit, AfterViewChecked {
//   // blogs: Blog[];
//   errorMessage: string;
//   isGridInitialized: boolean;
//   constructor( public element: ElementRef) { }
//   ngOnInit() {
//   }
//   ngAfterViewChecked() {
//     (this.initGrid());
//   }
//   initGrid() {
//     this.isGridInitialized = true;
//     let elem = document.querySelector('.social-grid');
//     let pckry;
//     imagesLoaded(elem, function(instance) {
//       console.log('all images are loaded');
//       pckry = new Packery(elem, {
//         percentPosition: true,
//         itemSelector: '.social-card',
//         gutter: 20
//       });
//     });
//   }
// }
