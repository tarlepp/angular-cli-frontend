import { Component, ViewEncapsulation } from '@angular/core';

import { FooterItemInterface } from './interfaces/';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FooterComponent {
  public version = require('../../../../package.json').version;

  public links: FooterItemInterface[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/tarlepp/angular2-frontend',
      icon: 'web',
    },
    {
      name: 'Issues',
      url: 'https://github.com/tarlepp/angular2-frontend/issues',
      icon: 'bug_report',
    },
    {
      name: 'Tarmo Leppänen',
      url: 'https://github.com/tarlepp',
      icon: 'person',
    },
  ];
}
