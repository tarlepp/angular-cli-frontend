import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class MessageService {
  /**
   * Constructor of the class
   *
   * @param {MdSnackBar}  snackBar
   */
  public constructor(private snackBar: MdSnackBar) {}

  /**
   * Method to show simple snack-bar / toast on page.
   *
   * @param {string}  message
   * @param {boolean} showCloseButton
   * @param {number}  duration
   *
   * @returns {MdSnackBarRef<SimpleSnackBar>}
   */
  public simple(message: string, showCloseButton = false, duration = 6000): MdSnackBarRef<SimpleSnackBar> {
    const ref = this.snackBar.open(message, showCloseButton ? 'close' : null, { duration: duration });

    ref.onAction().subscribe(() => {});

    return ref;
  }
}
