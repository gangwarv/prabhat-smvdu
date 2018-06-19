import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './dashboard/home/home.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AccountComponent } from './login/account.component';
import { NavMenuComponent } from './shared/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    AccountComponent,
    NavMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
