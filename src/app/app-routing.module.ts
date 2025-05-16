import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineListComponent } from './components/airline-list/airline-list.component';
import { AirlineDetailComponent } from './components/airline-detail/airline-detail.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';

const routes: Routes = [
  { path: '', component: AirlineListComponent },
  { path: 'airline/:id', component: AirlineDetailComponent },
  { path: 'airline/:id/flights', component: FlightListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports: [
    RouterModule                    
  ]
})
export class AppRoutingModule { }
