import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { 
  }

  show(message: string): void {
    this.snackBar.dismiss();
    this.openSnackBar(message, '');
  }

  private openSnackBar(message: string, undoMessage: string) {
    const config = new MatSnackBarConfig();
    config.duration = 10000;
    this.snackBar.open(message, '', config);
  }

}
