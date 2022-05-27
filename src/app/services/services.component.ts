import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../shared/services/breakpoint.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  comprehensiveServices = [
    'Unlimited advice via phone calls, emails and texts',
    'In-depth initial consultation',
    'Student assessment(s) such as personality/interests',
    'Test prep planning and timeline',
    'Review of courses and extracurricular activities',
    'College visit recommendations and prep',
    'Best-fit college list',
    'Develop and manage timeline for applications, essays, resume, etc.',
    'Financial aid and scholarships discussions',
    'Essay topic development and editing, incl scholarships',
    'Resume development, interview prep (if applicable)',
    'College application assistance',
    'Comparison of college acceptances',
  ];

  constructor(public breakpointService: BreakpointService) {}

  ngOnInit(): void {
  }

}
