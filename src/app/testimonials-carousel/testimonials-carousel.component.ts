import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {

  currentIndex = 0;
  testimonials: {address?: string, body: string, identifier: string}[] = [
    {
      address: 'Sharon',
      body: 'Thank you so much for being such a positive force in helping him get through the college admissions process! He honestly could not have done it without you. You, Sharon, are extremely good at what you do! Thank you, thank you, thank you!',
      identifier: 'Parent, Coppell High School'
    },
    {
      address: 'Mrs. DeWillis',
      body: 'Today I found out we had a college resume due tomorrow that I had apparently missed while [out of town] at a funeral. Luckily, thanks to your advice I already had one started that just needed to be updated. So this is me saying thank you for caring about my college education and future career path. It means a lot to me that you have gone out of your way to help me have opportunities to be successful. You’re helping me through a process that I can already see is very stressful and life changing. Your latest email inspired me to look for a summer engineering camp and take an internship with a chemical engineer that works with my dad.',
      identifier: 'Student, Grapevine High School'
    },
    {
      address: 'Sharon',
      body: 'You were such an amazing inspiration to [my son].',
      identifier: 'Parent, Colleyville Heritage High School'
    },
    {
      address: 'Dear Mrs. DeWillis',
      body: 'I wanted to write thanking you for your support and help through the college application process. Working with you allowed me to gain confidence in myself and in my day to day life. You are incredible at what you do and I cannot tell you how grateful I am for your encouragement and assistance. Because of you I got into almost every school I applied to… I also have you to thank for introducing me to my major…',
      identifier: 'Student, Ursuline Academy'
    },
    {
      address: 'Sharon',
      body: 'Just a note to thank you for your time and patience with us. This morning was priceless… Thank you, Thank you, Thank you!!!...I think I am going to give you a new title – ‘Navigator’',
      identifier: 'Parent, Grapevine High School'
    },
    {
      address: 'Sharon',
      body: 'I just wanted to text you that I got admitted into [university]!!! And I also wanted to thank you so much for helping me out with everything! You were such a big help in everything and I could not have done any of this without your help. Thank you so much Mrs. DeWillis!!!!!',
      identifier: 'Student, Coppell High School'
    },
    {
      address: 'Sharon',
      body: 'I just wanted to give you the good news that [my daughter] accepted the offer and will be going to [university]. I wanted to thank you for all you have done. I was so happy and felt so relieved that you were there to help at each and every step as she was consulting with you so many times. You were always there to help and that really touched all of us.',
      identifier: 'Parent, Plano West High School'
    },
    {
      address: 'Sharon',
      body: 'Thank you so much for being such a positive force in helping him get through the college admissions process! He honestly could not have done it without you. You, Sharon, are extremely good at what you do! Thank you, thank you, thank you!',
      identifier: 'Parent, Coppell High School'
    },
    {
      body: '[My daughter] sure will miss working with you! I can\'t thank you enough for your assistance. You have made this process so enjoyable for [my daughter]!',
      identifier: 'Parent, Keller High School'
    },
    {
      address: 'Dear Mrs. DeWillis',
      body: 'Thank you so much for all of your help through the college application process! If it weren’t for you and all of your help I probably wouldn’t have gotten into the honors college at [university]…I don’t know how I would’ve gotten anything done without your help!',
      identifier: 'Student, Grapevine High School'
    },
    {
      address: 'Mrs. Sharon',
      body: 'We can’t possibly repay you for everything you have done for me. You strongly believed in me since the day we met, and all has paid off after helping me get accepted into [college]. We are very grateful…',
      identifier: 'Student and parent, Paschal High School'
    },
    {
      address: 'Mrs. DeWillis',
      body: 'I got into [university] and got money! I really appreciate … all of your help throughout my senior year!',
      identifier: 'Student, Nolan Catholic High School'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  nextStory() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevStory() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.testimonials.length - 1;
    }
  }
}
