import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTS } from './data/events';

@Injectable()
export class EventService {
  constructor() {  }
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }
}
