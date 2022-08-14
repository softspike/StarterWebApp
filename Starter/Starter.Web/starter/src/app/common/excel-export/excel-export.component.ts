import { Component, Input, OnDestroy} from '@angular/core';
import { takeWhile } from 'rxjs';
import { ExcelExportService } from 'src/app/services/excel-export.service';
@Component({
  selector: 'shared-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnDestroy {
   private alive = true;
  response: any;
  apiUrl: string;
  fileName: string;



  @Input('response')
  set setRequest(val:any){
    if (val){
      this.response = val;
    }
  }

  @Input('api-url')
  set setUrl(val:any){
    if (val){
      this.apiUrl = val;
    }
  }

  @Input('file-name')
  set setFileName(val:any){
    if (val){
      this.fileName = val;
    }
  }

  
  // @Input('response') response;
  // @Input('api-url') apiUrl;
  // @Input('file-name') fileName;


  constructor(private excelExportService: ExcelExportService){}


    getXls()
    {
      this.excelExportService.excel(this.response, this.apiUrl, `${this.fileName}.xlsx`)
        .pipe(takeWhile(() => this.alive))
        .subscribe(() => { },
        );
    }

  ngOnDestroy(): void {
    this.alive = false;
  }







  
}
