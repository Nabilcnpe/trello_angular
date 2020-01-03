import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  // { path: 'ticket/:name', component: HomeComponent },
  { path: 'tickets', component: TicketsListComponent },
  { 
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
