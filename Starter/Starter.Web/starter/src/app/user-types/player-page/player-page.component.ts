import { Component, OnInit } from '@angular/core';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { UserService } from 'src/app/services/user.service';
import { takeWhile } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { IdModel } from 'src/app/models/models.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  displayedColumns = ['capitanName', 'approve', 'reject'];
  private alive = true;
  response : any;

  constructor(private freeAgencyService: FreeAgencyService,
    public service: UserService,
    private snackBarService: SnackbarService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const playerId = this.service.getFromLS().id
    this.freeAgencyService.getOpenInvitations(playerId)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) =>
      {
        this.response = response
        console.log(this.response)
      } ,
    (error: any) => {
      this.snackBarService.show('Server Error');
    });
  }



  approve(row: any) {
    const request = new IdModel(row.id);
    this.freeAgencyService.acceptInvitation(request)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) => {
        if(response){
          this.snackBarService.show('Invitation Accepted');
          this.getList();
        }
      },
    (error: any) => {
      this.snackBarService.show('Server Error');
    });
  }

  reject(row: any) {
    const request = new IdModel(row.id);
    this.freeAgencyService.rejectInvitation(request)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) => {
        this.snackBarService.show('Invitation Rejected');
          this.getList();
      },
    (error: any) => {
      this.snackBarService.show('Server Error');
    });
  }

}
