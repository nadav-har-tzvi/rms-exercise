import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CommonUtilsModule} from '../common-utils/common.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    CommonUtilsModule,
    PublicRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class PublicModule { }
