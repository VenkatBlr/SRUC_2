import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
// import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule
 //   LightboxModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
