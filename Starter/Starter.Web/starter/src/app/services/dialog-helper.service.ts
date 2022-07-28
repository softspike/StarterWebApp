import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogHelperService {

  sideBar(matDialogRef: MatDialogRef<any>, width: number) {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    matDialogConfig.width = `${width}px`;
    matDialogConfig.height = `99vh`;
    matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    matDialogConfig.position = { right: '0px', top: `62px` };
    matDialogRef.updatePosition(matDialogConfig.position);
  }
}
