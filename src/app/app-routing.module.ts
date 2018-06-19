import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './dashboard/home/home.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
