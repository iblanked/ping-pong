import { NgModule } from '@angular/core';

import { SharedModule }    from '../shared/shared.module';
import { PlayerService } from './player.service';
import { HttpComponent } from './http.component';

@NgModule({
  providers:[PlayerService],
  imports: [SharedModule],
  declarations: [HttpComponent]
})
export class HttpDemoModule {

}