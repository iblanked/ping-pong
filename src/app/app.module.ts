import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CoreModule }    from './shared/shared.module';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { WelcomeComponent } from './welcome.component';
import { HttpComponent } from './http/http.component';
import { RxJsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    WelcomeComponent,
    RxJsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
