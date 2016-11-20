import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Event } from '../../shared/events/event';
import { EventService } from '../../shared/events/event.service';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'events-banner',
  templateUrl: 'app/home/events-banner/events-banner.component.html',
  styleUrls:['app/home/events-banner/events-banner.component.css'],
  providers: [EventService]
})
export class EventsBannerComponent implements OnInit {

  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  events: Event[];
  example1SwipeOptions: any;

  constructor(
    private eventService: EventService
    ) {
    this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 5
    };
  }

  getEvents(){
    this.eventService.getEvents().then(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEvents();
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }
}
