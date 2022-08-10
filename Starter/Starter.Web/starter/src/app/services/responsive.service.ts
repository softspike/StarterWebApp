import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {
    isMobile = false;

    constructor(breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
            Breakpoints.HandsetPortrait]).subscribe(result => {
                if (result.matches) {
                    this.isMobile = true;
                }
            });
    }
}
