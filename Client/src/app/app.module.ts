import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { DisplayListsComponent } from './components/display-lists/display-lists.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    DisplayListsComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
