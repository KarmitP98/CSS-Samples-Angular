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
import {HexagonHoverComponent} from './hexagon-hover/hexagon-hover.component';
import {NeomorphComponent} from './neomorph/neomorph.component';
import {DropdownMenuComponent} from './dropdown-menu/dropdown-menu.component';
<<<<<<< HEAD
import { CustomCompsComponent } from './custom-comps/custom-comps.component';
import { PanelComponent } from './panel/panel.component';
import { SlideComponent } from './slide/slide.component';
=======
import { GlassMorphismComponent } from './glass-morphism/glass-morphism.component';
import { ComponentsComponent } from './components/components.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VideoComponent } from './video/video.component';
import {WebcamModule} from "ngx-webcam";
>>>>>>> 6301e245e46eda0378eaba202f0c7bc6858edafe

@NgModule({
  declarations: [
    AppComponent,
    NeonButtonComponent,
    TransparentButtonComponent,
    TranparentFormComponent,
    HeartbeatComponent,
    ToastComponent,
    StartupPageComponent,
    HexagonHoverComponent,
    NeomorphComponent,
    DropdownMenuComponent,
<<<<<<< HEAD
    CustomCompsComponent,
    PanelComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
=======
    GlassMorphismComponent,
    ComponentsComponent,
    SideMenuComponent,
    VideoComponent
>>>>>>> 6301e245e46eda0378eaba202f0c7bc6858edafe
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        WebcamModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
