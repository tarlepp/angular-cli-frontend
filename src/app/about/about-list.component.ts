import { Component, Input } from '@angular/core';

import { AboutItemInterface } from './interfaces/';

@Component({
  selector: 'app-about-list',
  templateUrl: './about-list.component.html',
  styleUrls: ['./about-list.component.scss']
})

export class AboutListComponent {
  @Input() items: AboutItemInterface[];
  @Input() className: string;

  public constructor() { }
}
