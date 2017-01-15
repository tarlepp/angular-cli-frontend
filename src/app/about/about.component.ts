import { Component } from '@angular/core';

import { AboutItemInterface } from './interfaces/';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  /**
   * Collection of used libraries.
   *
   * @type {AboutItemInterface[]}
   */
  public libraries: AboutItemInterface[] = [
    {
      name: 'Angular 2',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/angular',
    },
    {
      name: 'Material Design for Angular 2',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/material2',
    },
    {
      name: 'angular2-moment',
      url: 'https://github.com/urish/angular2-moment',
    },
  ];

  /**
   * Collection of external links.
   *
   * @type {AboutItemInterface[]}
   */
  public externalLinks: AboutItemInterface[] = [
    {
      name: 'Angular 2',
      logo: '/assets/angular.png',
      url: 'https://angular.io',
    },
    {
      name: 'Material design',
      url: 'https://material.google.com',
    },
    {
      name: 'Angular 2 style guide',
      logo: '/assets/angular.png',
      url: 'https://angular.io/docs/ts/latest/guide/style-guide.html',
    },
    {
      name: 'Moment.js',
      url: 'http://momentjs.com/',
    },
  ];
}
