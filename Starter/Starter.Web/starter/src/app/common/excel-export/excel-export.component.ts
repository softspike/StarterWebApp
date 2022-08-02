import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { finalize, takeWhile } from 'rxjs';
import { ExcelExportService } from 'src/app/services/excel-export.service';
import { ThrobberService } from 'src/app/services/throbber.service';

@Component({
  selector: 'shared-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnDestroy {

  type = 'csv';
  request: any;
  apiUrl: string;
  fileName = `Starter | Free Agency List`;
  private alive = true;


  @Input('request')
  set setRequest(val: any) {
    if (val) {
      this.request = val;
    }
  }

  @Input('api-url')
  set setUrl(val: string) {
    if (val) {
      this.apiUrl = val;
    }
  }

  @Input('type')
  set setType(val: string) {
    if (val) {
      this.type = val;
    }
  }

  @Input('file-name')
  set setFileName(val: string) {
    if (val) {
      this.fileName = val;
    }
  }

  constructor(private throbberService: ThrobberService,
              private excelExportService: ExcelExportService,
              private fileSaverService: FileSaverService) 
  { }

    getXls() {
      switch(this.type){
        case 'xlsx':
          this.exportExcel();
          break;
        case 'xlsx-from-list':
          this.excelExportFromList();
          break;
        default:
          this.exportCsv();
      }
    }

    excelExportFromList(){
      this.throbberService.block();
      this.excelExportService.excelFromList(this.request, this.apiUrl, `${this.fileName}.xlsx`)
        .pipe(takeWhile(() => this.alive),
          finalize(() => { this.throbberService.unblock(); }))
        .subscribe(() => { },
        );
    }

    exportExcel() {
      this.throbberService.block();
      this.excelExportService.excel(this.request, this.apiUrl, `${this.fileName}.xlsx`)
        .pipe(takeWhile(() => this.alive),
          finalize(() => { this.throbberService.unblock(); }))
        .subscribe(() => { },
        );
    }

  exportCsv() {
    this.throbberService.block();
    this.excelExportService.csv(this.request, this.apiUrl)
      .pipe(takeWhile(() => this.alive),
        finalize(() => { this.throbberService.unblock(); }))
      .subscribe((res: string) => {
          const blob = new Blob([res], { type: 'text/csv' });
          this.fileSaverService.save(blob, `${this.fileName}.csv`);
        },
      );
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
