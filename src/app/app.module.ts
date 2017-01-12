import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { HeroDetailComponent }  from './components/hero-details.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroService }          from "./services/hero.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'heroes',     component: HeroesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
