import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NeonButtonComponent} from './neon-button/neon-button.component';
import {TransparentButtonComponent} from './transparent-button/transparent-button.component';
import {TranparentFormComponent} from './tranparent-form/tranparent-form.component';
import {HeartbeatComponent} from './heartbeat/heartbeat.component';
import {ToastComponent} from './toast/toast.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StartupPageComponent} from './startup-page/startup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NeonButtonComponent,
    TransparentButtonComponent,
    TranparentFormComponent,
    HeartbeatComponent,
    ToastComponent,
    StartupPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
