import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NeonButtonComponent} from './neon-button/neon-button.component';
import {TransparentButtonComponent} from './transparent-button/transparent-button.component';
import {TranparentFormComponent} from './tranparent-form/tranparent-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NeonButtonComponent,
    TransparentButtonComponent,
    TranparentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
