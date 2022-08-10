import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageRequest, PageResponse } from 'src/app/models/table.models';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { ThrobberService } from 'src/app/services/throbber.service';
import { AgencyButtonComponent } from '../agency-button/agency-button.component';
import { takeWhile, tap, finalize, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-agency-table',
  templateUrl: './agency-table.component.html',
  styleUrls: ['./agency-table.component.scss']
})
export class AgencyTableComponent implements OnInit, OnDestroy {
response: any[] = [];
  searchText = "";
  displayedColumns = ['buttons', 'countryId', 'isAir', 'isDeleted', 'isSea', 'latitude', 'longitude', 'type', 'invite', 'delete'];
  private alive = true;
  isMobile = false;
  

  constructor( private freeAgencyService: FreeAgencyService,
               private throbberService: ThrobberService,
               private responsiveService: ResponsiveService,
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
    this.throbberService.block();
    this.freeAgencyService.list()
      .pipe(takeWhile(() => this.alive),
        finalize(() => { this.throbberService.unblock(); }))
      .subscribe((response: any[]) => {
        this.response = response;
      }

        );
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


