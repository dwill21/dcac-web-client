import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { interval, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() text: any = [];
  @Input() contentTemplate?: TemplateRef<any>;

  currentSlide = 0;
  autoplay$ = new Subject<void>();
  private isDestroyed$ = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {
    const newTimer = () => interval(30 * 1000);
    this.autoplay$.pipe(
      startWith(newTimer()),
      switchMap(newTimer),
      takeUntil(this.isDestroyed$)
    ).subscribe(() => {
      this.onNextClick();
    });
  }

  ngOnDestroy() {
    this.isDestroyed$.next(true);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.text.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.text.length ? 0 : next;
  }

  resetAutoplayTimer() {
    this.autoplay$.next();
  }
}
