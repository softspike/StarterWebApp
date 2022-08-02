import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { tap } from 'rxjs';
import { PageRequest } from '../models/table.models';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor(
    private http: HttpClient,
    private fileSaverService: FileSaverService
    
    )
 { }



 csv(request: PageRequest, apiUrl: string) {
  return this.http.post(apiUrl, request,
    {
      responseType: 'text'
    });
}


 excel(request: PageRequest, apiUrl: string, fileName: string) {
  return this.http.post(apiUrl, request,
    {
      responseType: 'blob'
    }).pipe(
    tap((blob: Blob) => {
      this.fileSaverService.save(blob, fileName);
    })
  );
}


 excelFromList(request: any, apiUrl: string, fileName: string) {
  return this.http.post(apiUrl, request,
    {
      responseType: 'blob'
    }).pipe(
    tap((blob: Blob) => {
      this.fileSaverService.save(blob, fileName);
    })
  );
}





}
