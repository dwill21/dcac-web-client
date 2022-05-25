import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutText = [
    'Sharon DeWillis holds a BS in Business Administration (Corporate Finance and Investment Management), ' +
    'MBA (International Business), and certificate in Independent Educational Consulting. She is an active professional ' +
    'member of the Independent Educational Consultants Association (IECA) and visits approximately 10 colleges each year ' +
    'to gain a personal perspective of each one. Sharon discovered the need for independent educational planning as she ' +
    'began navigating the college admissions process early in her son’s high school career.',

    'In her personal life, Sharon recently served eight on the Board of Directors of the Grapevine-Colleyville Education ' +
    'Foundation and is a past President of the Colleyville Area Chapter of National Charity League, Inc. She has been an ' +
    '18-year volunteer in the Grapevine-Colleyville Independent School District. Sharon is married to Frantz DeWillis and ' +
    'they have 3 adult children: Ryan, a 2019 graduate of Baylor University and former National Merit Scholar; and Erin and ' +
    'Anna, 2022 graduates of the University of Alabama. Ryan is married to Christy, a fellow Baylor graduate.',

    'Sharon’s business is almost 100% referral-based. She considers this the highest compliment she can receive and in ' +
    'this she takes great pride.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
