import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { SplashComponent } from './splash/splash.component';

export const router: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full'},
    { path: 'splash', component: SplashComponent },
    { path: 'results', component: ResultsPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( router )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}