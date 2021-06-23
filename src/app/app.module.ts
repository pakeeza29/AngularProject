import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
