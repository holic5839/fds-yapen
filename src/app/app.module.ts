import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YapenHeaderComponent } from './yapen-header.component';
import { YapenFooterComponent } from './yapen-footer.component';
import { YapenContainerComponent } from './yapen-container.component';
import { YapenSearchbarComponent } from './yapen-searchbar.component';
import { YapenListComponent } from './yapen-list.component';
import { YapenReserveComponent } from './yapen-reserve.component';
import { YapenPayComponent } from './yapen-pay.component';
import { AppRouterModule } from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
    YapenHeaderComponent,
    YapenFooterComponent,
    YapenContainerComponent,
    YapenSearchbarComponent,
    YapenListComponent,
    YapenReserveComponent,
    YapenPayComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
