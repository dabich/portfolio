import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { NgSemanticModule } from "ng-semantic";

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ContactsComponent
  ],
  imports: [
    NgSemanticModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
