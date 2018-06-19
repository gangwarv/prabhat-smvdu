// import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { NgModule } from '@angular/core';

// import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialDesignModule { }
