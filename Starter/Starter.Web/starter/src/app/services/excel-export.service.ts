import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor(
    private http: HttpClient,
    private fileSaverService: FileSaverService){}

 excel(request: any, apiUrl: string, fileName: string) {
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
