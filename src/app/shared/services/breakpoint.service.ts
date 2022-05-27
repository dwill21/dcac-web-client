import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  readonly isScreenXS$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isScreenXS$ = this.breakpointObserver.observe(Breakpoints.XSmall)
      .pipe(map(result => result.matches));
  }
}
