import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [

  {path:'', redirectTo:'home' , pathMatch:'full' },
  {path:'home', component:HomeComponent },
  {path:'tv', component:TvComponent },
  {path:'movies', component:MoviesComponent },
  {path:'people', component:PeopleComponent },
  {path:'about', component:AboutComponent },
  {path:'contact',component:ContactsComponent },
  {path:'moviedetail/:id',component:MoviedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
