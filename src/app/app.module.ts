import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/Http';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmDialogModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

import { StaffAssignmentComponent } from './staff_assignment/staff-assignment.component';
import { StaffAssignmentService } from './staff_assignment/staff-assignment.service';


@NgModule({
  declarations: [
    AppComponent,
    StaffAssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(), // This is for Bootstarp
    ConfirmDialogModule,
    SharedModule
  ],
  providers: [StaffAssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
