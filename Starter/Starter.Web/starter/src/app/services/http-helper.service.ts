import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  static objectToQueryString(obj) {
    if (obj == null) {
      return '';
    }

    const parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key]) {
          parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      }
    }
    return `?${parts.join('&')}`;
  }
}