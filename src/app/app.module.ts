import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HttpDemoModule } from './http/http-demo.module';
import { RxJsDemoModule } from './rxjs/rxjs-demo.module';

import { WelcomeComponent } from './welcome.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './http/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpDemoModule,
    RxJsDemoModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
