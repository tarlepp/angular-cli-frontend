import { Injectable } from '@angular/core';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenav: MdSidenav;

  /**
   * Setter for sidenav.
   *
   * @param {MdSidenav} sidenav
   */
  public setSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open this sidenav, and return a Promise that will resolve when it's fully opened (or get rejected if it didn't).
   *
   * @returns Promise<MdSidenavToggleResult>
   */
  public open(): Promise<MdSidenavToggleResult> {
    return this.sidenav.open();
  }

  /**
   * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get rejected if it didn't).
   *
   * @returns Promise<MdSidenavToggleResult>
   */
  public close(): Promise<MdSidenavToggleResult> {
    return this.sidenav.close();
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or close() when it's closed.
   *
   * @param {boolean} isOpen  Whether the sidenav should be open.
   *
   * @returns {Promise<MdSidenavToggleResult>}
   */
  public toggle(isOpen?: boolean): Promise<MdSidenavToggleResult> {
    return this.sidenav.toggle(isOpen);
  }
}
