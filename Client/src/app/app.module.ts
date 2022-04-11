import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { DisplayListsComponent } from './components/display-lists/display-lists.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    DisplayListsComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
