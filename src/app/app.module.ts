import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';;
import { CommonModule, DatePipe } from '@angular/common';
import { NgbAlertModule, NgbDatepickerI18n, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimePickerComponent } from './Components/time-picker/time-picker.component';
import { CalenderComponent } from './Components/schedule-calender/calender/calender.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarDateFormatter, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ReactiveFormsModule } from '@angular/forms';
import { TimesoltFromComponent } from './Components/schedule-calender/add-time-solot/timesolt-from/timesolt-from.component';
import { EditorComponent } from './Components/schedule-calender/HtmlEditor/editor/editor.component'; // Import ReactiveFormsModule

import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';
import { BarChartComponent } from './Components/AppexChart/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    CalenderComponent,
    TimesoltFromComponent,
    EditorComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    NgbDatepickerModule,
    NgbAlertModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgxSimpleTextEditorModule,
    FlatpickrModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    DatePipe,
    {
      provide: CalendarDateFormatter,

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
