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

  showWithUndo(message: string): void {
    this.snackBar.dismiss();
    this.openSnackBar(message, 'Undo');
  }

  showRightCorner(message: string): void {
    this.snackBar.dismiss();
    this.openSnackBarRightCorner(message, '');
  }

  private openSnackBar(message: string, undoMessage: string) {
    const config = new MatSnackBarConfig();
    config.duration = 10000;
    this.snackBar.open(message, '', config);
  }

  private openSnackBarRightCorner(message: string, undoMessage: string) {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';
    this.snackBar.open(message, undoMessage, config);
  }

}
