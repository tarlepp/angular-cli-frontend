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
   * @type {Array<AboutItemInterface>}
   */
  public libraries: Array<AboutItemInterface> = [
    {
      name: 'Angular',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/angular',
    },
    {
      name: 'Material Design components for Angular',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/material2',
    },
    {
      name: 'angular2-jwt',
      logo: '/assets/auth0.png',
      url: 'https://github.com/auth0/angular2-jwt',
    },
    {
      name: 'Angular-CLI',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/angular-cli',
    },
  ];

  /**
   * Collection of external links.
   *
   * @type {Array<AboutItemInterface>}
   */
  public externalLinks: Array<AboutItemInterface> = [
    {
      name: 'Angular',
      logo: '/assets/angular.png',
      url: 'https://angular.io',
    },
    {
      name: 'Material design',
      url: 'https://material.google.com',
    },
    {
      name: 'Angular style guide',
      logo: '/assets/angular.png',
      url: 'https://angular.io/docs/ts/latest/guide/style-guide.html',
    },
    {
      name: 'JSON Web Tokens',
      logo: '/assets/jwt.svg',
      url: 'https://jwt.io/',
    },
  ];
}
