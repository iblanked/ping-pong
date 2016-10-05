import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CoreModule }    from './shared/shared.module';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HttpComponent } from './http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpComponent
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
