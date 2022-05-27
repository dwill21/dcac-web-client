import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  readonly isScreenXS$: Observable<boolean>;
  readonly isScreenTabletPortrait$: Observable<boolean>

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isScreenXS$ = this.observeBreakpoint(Breakpoints.XSmall);
    this.isScreenTabletPortrait$ = this.observeBreakpoint(Breakpoints.TabletPortrait);
  }

  private observeBreakpoint(breakpoint: string): Observable<boolean> {
    return this.breakpointObserver.observe(breakpoint)
      .pipe(map(result => result.matches));
  }
}
