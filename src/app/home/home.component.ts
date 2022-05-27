import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../shared/services/breakpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pitch = 'The college admissions process of today can be overwhelming. There are approximately 4000 colleges and ' +
    'universities in the U.S. and each has its own unique academic, social, and cultural opportunities. ' +
    'With such a broad landscape, it’s difficult for students to know where to look and what it takes to put together ' +
    'a strong application to gain admission. At DeWillis College Admissions Consulting, we help students find the ' +
    'college that fits them best – and at the right price – and then guide them through the complete application and ' +
    'admissions process. We bring knowledge, experience and order to the process to help families avoid costly ' +
    'mistakes and missed deadlines. And just as importantly, we partner with families to minimize the stress and ' +
    'uncertainty in the process so they can focus on the joyful parts of high school.';

  constructor(public breakpointService: BreakpointService) {}

  ngOnInit(): void {}
}
