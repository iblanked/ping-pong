import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

@NgModule({
  exports: [CommonModule, HttpModule]
})
export class CoreModule {

}