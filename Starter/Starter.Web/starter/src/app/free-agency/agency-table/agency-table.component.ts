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

@Component({
  selector: 'app-agency-table',
  templateUrl: './agency-table.component.html',
  styleUrls: ['./agency-table.component.scss']
})
export class AgencyTableComponent implements AfterViewInit, OnDestroy {

  searchText = "";
  displayedColumns = ['buttons', 'country', 'name', 'code', 'long', 'lat','type'];
  request = new PageRequest();
  response = new PageResponse<any>();
  pageSizeOptions = [25, 50];
  private searchUpdated = new Subject();
  private alive = true;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor( private freeAgencyService: FreeAgencyService,
               private throbberService: ThrobberService,
               public dialog: MatDialog) { 

    this.searchUpdated.pipe(
      debounceTime(1000))
      .subscribe(() => {
        this.request.pageNumber = 0;
       this.getList();
      });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.request.setPageSize(this.paginator);
          this.getList();
        })
      )
      .subscribe();

    this.sort.sortChange
      .pipe(
        tap(() => {
          this.paginator.pageIndex = 0;
          this.request.setSort(this.sort);
          this.getList();
        })
      )
      .subscribe();
  }

  setPageSize(size: number) {
    this.pageSizeOptions = [size, 25, 50];
    this.request.pageSize = size;
    this.getList();
  } 

  getList() {
    this.throbberService.block();
    this.freeAgencyService.list(this.request)
      .pipe(takeWhile(() => this.alive),
        finalize(() => { this.throbberService.unblock(); }))
      .subscribe((response: PageResponse<any>) => this.response = response,
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

  add() {
    const dialogRef = this.dialog.open(AgencyButtonComponent);

    dialogRef.afterClosed()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.getList();
      });
  }

  search() {
    this.paginator.pageIndex = 0;
    this.request.pageNumber = 0;
    this.getList();
}

  clearSearch() {
    this.request.searchText = "";   
    this.search();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}


