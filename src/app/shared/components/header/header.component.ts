import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title$!: Observable<string>;
  private titles = {
    full: 'DeWillis College Admissions Consulting',
    abbreviated: 'DCAC'
  }
  navLinks = [
    { text: 'Home', location: '/' },
    { text: 'Services', location: '/services' },
    { text: 'About', location: '/about' },
  ];

  constructor(public breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.title$ = this.breakpointService.isScreenXS$.pipe(
      map(isScreenXS => isScreenXS ? this.titles.abbreviated : this.titles.full)
    );
  }
}
