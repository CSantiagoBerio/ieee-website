import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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









const app_routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'societies',
    component: SocietiesComponent
  },
  {
    path: 'hall',
    component: HallOfFameComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

export const app_routing = RouterModule.forRoot(app_routes);
