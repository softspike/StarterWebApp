import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { ThrobberService } from 'src/app/services/throbber.service';
import { AgencyButtonComponent } from '../agency-button/agency-button.component';
import { takeWhile } from 'rxjs/operators';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-agency-table',
  templateUrl: './agency-table.component.html',
  styleUrls: ['./agency-table.component.scss']
})
export class AgencyTableComponent implements OnInit, OnDestroy {
  response: any;
  searchText = "";
  displayedColumns = ['buttons', 'name', 'location', 'postCode','latitude', 'longitude', 'ageGroup', 'type', 'invite', 'delete'];
  private alive = true;
  isMobile = false;
  totalRecords: any;
  

  constructor( private freeAgencyService: FreeAgencyService,
               private responsiveService: ResponsiveService,
               private snackBarService: SnackbarService,
               public dialog: MatDialog) { 

                if (this.responsiveService.isMobile) {
                  this.isMobile = true;
                  this.displayedColumns = ['buttonsMobile', 'customerMobile'];
                }
               }

  ngOnInit(){
    this.getList();
  }

  getList() {
    this.freeAgencyService.list()
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any[]) => this.response = response
    ,
    (error: any) => {
      this.snackBarService.show('Server Error');
    });
  }

  edit(row) {
    const dialogRef = this.dialog.open(AgencyButtonComponent, { data: { model: row } });

    dialogRef.afterClosed()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.getList();
      });
  }

//   add() {
//     const dialogRef = this.dialog.open(AgencyButtonComponent);

//     dialogRef.afterClosed()
//       .pipe(takeWhile(() => this.alive))
//       .subscribe(() => {
//         this.getList();
//       });
//   }

//   search() {
//     this.paginator.pageIndex = 0;
//     this.request.pageNumber = 0;
//     this.getList();
// }

//   clearSearch() {
//     this.request.searchText = "";   
//     this.search();
//   }

// updateServer() {
//   this.dataUpdateService.update(this.dataRequest)
//     .pipe(takeWhile(() => this.alive))
//     .subscribe(),
//       (error: any) => {
//         this.errorHandlerService.processErrorResult(error);
//       };
// }

// updateData(id: number, value: string, dataType: string) {
//   this.dataRequest = new DataUpdateRequest(value, dataType, id);
//   this.dataUpdated.next(this.dataRequest);
// }


  ngOnDestroy(): void {
    this.alive = false;
  }

}


