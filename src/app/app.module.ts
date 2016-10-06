import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HttpDemoModule } from './http/http-demo.module';

import { WelcomeComponent } from './welcome.component';
import { RxJsComponent } from './rxjs/rxjs.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './http/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RxJsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpDemoModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
