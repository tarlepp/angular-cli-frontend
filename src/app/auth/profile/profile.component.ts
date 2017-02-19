import { Component, OnInit } from '@angular/core';

import { ProfileDataBackendInterface, ProfileDataJwtInterface } from '../services/interfaces/';
import { ActivatedRoute } from '@angular/router';
import { ProfileComponentResolveInterface } from './interfaces/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  public profileLocal: ProfileDataJwtInterface;
  public profileRemote: ProfileDataBackendInterface;

  /**
   * Constructor of the class.
   *
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  /**
   * On component init we store resolved data, so that we can use those on GUI.
   */
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: ProfileComponentResolveInterface) => {
      this.profileLocal = data.profileLocal;
      this.profileRemote = data.profileRemote;
    });
  }
}
