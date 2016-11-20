import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { JoinComponent } from './join/join.component';
import { SocietiesComponent } from './societies/societies.component';
import { HallOfFameComponent } from './hall/hall.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';
import { EventsBannerComponent } from './home/events-banner/events-banner.component';
import { KSSwiperModule } from 'angular2-swiper';
import { EventService } from './shared/events/event.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    KSSwiperModule,
    app_routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CalendarComponent,
    JoinComponent,
    SocietiesComponent,
    HallOfFameComponent,
    SponsorsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EventsBannerComponent
  ],
  providers: [
    EventService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
