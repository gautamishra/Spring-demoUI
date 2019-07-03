import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { MaterialModule } from '../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavigationMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavigationMenuComponent,
  ]
})
export class CoreModule { }
