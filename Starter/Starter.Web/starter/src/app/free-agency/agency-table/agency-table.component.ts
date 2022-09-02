import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { takeWhile } from 'rxjs/operators';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SubmitUserComponent } from '../submit-user/submit-user.component';
import { UserService } from 'src/app/services/user.service';
import { InvitationRequest } from 'src/app/models/models.model';

@Component({
  selector: 'app-agency-table',
  templateUrl: './agency-table.component.html',
  styleUrls: ['./agency-table.component.scss']
})
export class AgencyTableComponent implements OnInit, OnDestroy {
  response: any;
  searchText = "";
  displayedColumns = ['buttons', 'name', 'location', 'postCode','latitude', 'longitude', 'ageGroup', 'tournamentType', 'invite', 'delete'];
  private alive = true;
  isMobile = false;
  totalRecords: any;
  isCaptain = false;
  

  constructor( private freeAgencyService: FreeAgencyService,
               private responsiveService: ResponsiveService,
               private snackBarService: SnackbarService,
               public dialog: MatDialog,
               public service: UserService) { 

                if (this.responsiveService.isMobile) {
                  this.isMobile = true;
                  this.displayedColumns = ['buttonsMobile', 'customerMobile'];
                }
               }

  ngOnInit(){
    this.isCaptain = this.service.getFromLS().isCaptain;
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

  edit() {
    const dialogRef = this.dialog.open(SubmitUserComponent);

    dialogRef.afterClosed()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.getList();
      });
  }

  add() {
    const dialogRef = this.dialog.open(SubmitUserComponent);

    dialogRef.afterClosed()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.getList();
      });
  }

  invite(row: any){
    let request = new InvitationRequest;
    request.captainId = this.service.getFromLS().id;
    request.playerId = row.playerId;

    this.freeAgencyService.createnvitation(request)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) => {
        if(response){
          this.snackBarService.show('Player Invited');
        }
      }
    ,
    (error: any) => {
      this.snackBarService.show('Server Error');
    });


  }

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


