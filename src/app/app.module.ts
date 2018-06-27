import { AccountComponent } from './login/account.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './dashboard/home/home.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { NavMenuComponent } from './shared/nav-menu.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    AccountComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    //AngularFirestoreModule.enablePersistence() to offline data availability
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
