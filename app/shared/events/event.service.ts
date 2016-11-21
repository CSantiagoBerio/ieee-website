import { Injectable } from '@angular/core';
import { Event } from './event';
import { EventsWrapper } from './events-wrapper';
import { EVENTS } from './data/events';
import { wrappers } from './data/events-wrappers';

@Injectable()
export class EventService {
  constructor() {  }
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }
  orderEventsByDay(): Promise<EventsWrapper[]>{
    var eventsWrapperArray = wrappers;

    return this.getEvents().then(events => {
      for(let i=0; i < events.length; i++){
          eventsWrapperArray[events[i].date.getDay()].events.push(events[i]);
        }
        eventsWrapperArray.push(eventsWrapperArray.shift());
      return eventsWrapperArray;
    })
  }

}
