import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtodoComponent } from './todo/component/viewtodo/viewtodo.component';
import { AlltodoComponent } from './todo/component/alltodo/alltodo.component';
import { AddtodoComponent } from './todo/component/addtodo/addtodo.component';
import { UpdatetodoComponent } from './todo/component/updatetodo/updatetodo.component';
import {  HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewtodoComponent,
    AlltodoComponent,
    AddtodoComponent,
    UpdatetodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
