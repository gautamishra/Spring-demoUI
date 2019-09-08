import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { MaterialModule } from '../material/material.module';
import {RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterService } from './http-intercepter.service';
import { NotificationsService } from 'angular2-notifications';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterService,
      deps: [
        NotificationsService
      ],
      multi:true
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavigationMenuComponent,
  ]
})
export class CoreModule { }
