import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeLineComponentComponent } from './components/time-line-component/time-line-component.component';
import { TopMenuComponentComponent } from './components/top-menu-component/top-menu-component.component';
import { AsideMenuComponentComponent } from './components/aside-menu-component/aside-menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponentComponent,
    TopMenuComponentComponent,
    AsideMenuComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
