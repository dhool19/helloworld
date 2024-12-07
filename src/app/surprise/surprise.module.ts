import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurprisePageRoutingModule } from './surprise-routing.module';

import { SurprisePage } from './surprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurprisePageRoutingModule
  ],
  declarations: [SurprisePage]
})
export class SurprisePageModule {}
