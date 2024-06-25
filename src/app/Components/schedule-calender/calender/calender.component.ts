import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, inject, OnInit,ChangeDetectorRef, NgZone  } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbDateParserFormatter, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,CalendarView, } from 'angular-calendar';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppointmentService } from 'src/app/Services/appointment.service';


@Component({
  selector: 'app-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})

export class CalenderComponent implements OnInit {
public formatter = inject(NgbDateParserFormatter);
public currentDateTime: any = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};


public view: CalendarView = CalendarView.Week;
public CalendarView = CalendarView;
public dairyDate!: NgbDateStruct;
public viewDate: Date = new Date();
public today = new Date();

public startTime:any;
public endTime:any;
public startDate:any;
public copyStartDate:any = new Date();
public copyToDate:any = new Date();
public appointments:any;

public hourTime:string = '';
private id:number = 1;

public refresh = new Subject<void>();
public calenderEvents: CalendarEvent[] = [];



public AvailabilityTimeList: any[] = [
  {id: 0,time: '12:00 AM',value: '00:00'},
  {id: 1,time: '12:30 AM',value: '00:30'},
  {id: 2,time: '01:00 AM',value: '01:00'},
  {id: 3,time: '01:30 AM',value: '01:30'},
  {id: 4,time: '02:00 AM',value: '02:00'},
  {id: 5,time: '02:30 AM',value: '02:30'},
  {id: 6,time: '03:00 AM',value: '03:00'},
  {id: 7,time: '03:30 AM',value: '03:30'},
  {id: 8,time: '04:00 AM',value: '04:00'},
  {id: 9,time: '04:30 AM',value: '04:30'},
  {id: 10,time: '05:00 AM',value: '05:00'},
  {id: 11,time: '05:30 AM',value: '05:30'},
  {id: 12,time: '06:00 AM',value: '06:00'},
  {id: 13,time: '06:30 AM',value: '06:30'},
  {id: 14,time: '07:00 AM',value: '07:00'},
  {id: 15,time: '07:30 AM',value: '07:30'},
  {id: 16,time: '08:00 AM',value: '08:00'},
  {id: 17,time: '08:30 AM',value: '08:30'},
  {id: 18,time: '09:00 AM',value: '09:00'},
  {id: 19,time: '09:30 AM',value: '09:30'},
  {id: 20,time: '10:00 AM',value: '10:00'},
  {id: 21,time: '10:30 AM',value: '10:30'},
  {id: 22,time: '11:00 AM',value: '11:00'},
  {id: 23,time: '11:30 AM',value: '11:30'},
  {id: 24,time: '12:00 PM',value: '12:00'},
  {id: 25,time: '12:30 PM',value: '12:30'},
  {id: 26,time: '01:00 PM',value: '13:00'},
  {id: 27,time: '01:30 PM',value: '13:30'},
  {id: 28,time: '02:00 PM',value: '14:00'},
  {id: 29,time: '02:30 PM',value: '14:30'},
  {id: 30,time: '03:00 PM',value: '15:00'},
  {id: 31,time: '03:30 PM',value: '15:30'},
  {id: 32,time: '04:00 PM',value: '16:00'},
  {id: 33,time: '04:30 PM',value: '16:30'},
  {id: 34,time: '05:00 PM',value: '17:00'},
  {id: 35,time: '05:30 PM',value: '17:30'},
  {id: 36,time: '06:00 PM',value: '18:00'},
  {id: 37,time: '06:30 PM',value: '18:30'},
  {id: 38,time: '07:00 PM',value: '19:00'},
  {id: 39,time: '07:30 PM',value: '19:30'},
  {id: 40,time: '08:00 PM',value: '20:00'},
  {id: 41,time: '08:30 PM',value: '20:30'},
  {id: 42,time: '09:00 PM',value: '21:00'},
  {id: 43,time: '09:30 PM',value: '21:30'},
  {id: 44,time: '10:00 PM',value: '22:00'},
  {id: 45,time: '10:30 PM',value: '22:30'},
  {id: 46,time: '11:00 PM',value: '23:00'},
  {id: 47,time: '11:30 PM',value: '23:30'},
];

public endTimeList:any[] = [
  {id: 0,time: '12:00 AM',value: '00:00'},
  {id: 1,time: '12:30 AM',value: '00:30'},
  {id: 2,time: '01:00 AM',value: '01:00'},
  {id: 3,time: '01:30 AM',value: '01:30'},
  {id: 4,time: '02:00 AM',value: '02:00'},
  {id: 5,time: '02:30 AM',value: '02:30'},
  {id: 6,time: '03:00 AM',value: '03:00'},
  {id: 7,time: '03:30 AM',value: '03:30'},
  {id: 8,time: '04:00 AM',value: '04:00'},
  {id: 9,time: '04:30 AM',value: '04:30'},
  {id: 10,time: '05:00 AM',value: '05:00'},
  {id: 11,time: '05:30 AM',value: '05:30'},
  {id: 12,time: '06:00 AM',value: '06:00'},
  {id: 13,time: '06:30 AM',value: '06:30'},
  {id: 14,time: '07:00 AM',value: '07:00'},
  {id: 15,time: '07:30 AM',value: '07:30'},
  {id: 16,time: '08:00 AM',value: '08:00'},
  {id: 17,time: '08:30 AM',value: '08:30'},
  {id: 18,time: '09:00 AM',value: '09:00'},
  {id: 19,time: '09:30 AM',value: '09:30'},
  {id: 20,time: '10:00 AM',value: '10:00'},
  {id: 21,time: '10:30 AM',value: '10:30'},
  {id: 22,time: '11:00 AM',value: '11:00'},
  {id: 23,time: '11:30 AM',value: '11:30'},
  {id: 24,time: '12:00 PM',value: '12:00'},
  {id: 25,time: '12:30 PM',value: '12:30'},
  {id: 26,time: '01:00 PM',value: '13:00'},
  {id: 27,time: '01:30 PM',value: '13:30'},
  {id: 28,time: '02:00 PM',value: '14:00'},
  {id: 29,time: '02:30 PM',value: '14:30'},
  {id: 30,time: '03:00 PM',value: '15:00'},
  {id: 31,time: '03:30 PM',value: '15:30'},
  {id: 32,time: '04:00 PM',value: '16:00'},
  {id: 33,time: '04:30 PM',value: '16:30'},
  {id: 34,time: '05:00 PM',value: '17:00'},
  {id: 35,time: '05:30 PM',value: '17:30'},
  {id: 36,time: '06:00 PM',value: '18:00'},
  {id: 37,time: '06:30 PM',value: '18:30'},
  {id: 38,time: '07:00 PM',value: '19:00'},
  {id: 39,time: '07:30 PM',value: '19:30'},
  {id: 40,time: '08:00 PM',value: '20:00'},
  {id: 41,time: '08:30 PM',value: '20:30'},
  {id: 42,time: '09:00 PM',value: '21:00'},
  {id: 43,time: '09:30 PM',value: '21:30'},
  {id: 44,time: '10:00 PM',value: '22:00'},
  {id: 45,time: '10:30 PM',value: '22:30'},
  {id: 46,time: '11:00 PM',value: '23:00'},
  {id: 47,time: '11:30 PM',value: '23:30'},
];


public timsoltFrom!:FormGroup;
  constructor(
    private datePipe: DatePipe,
    private appointment:AppointmentService) {
    const selectedDate = {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()};
    this.dairyDate = selectedDate;
    this.startTime = this.AvailabilityTimeList[0].value;
    this.endTime = this.endTimeList[1].value;
  }


  ngOnInit(): void {
    //GET APPOINTMENT OF CURRENT WEEK
    this.appointments = this.appointment.getAppointmentsOfWeek();
    this.appointments.forEach((element:any) => { this.calenderEvents.push(element);});
    this.refreshCalendarTimeLine();
    setInterval(() => {
      let modalOpenBtn: HTMLElement = document.getElementById('clickHourFunction') as HTMLElement;
      if(modalOpenBtn){
        modalOpenBtn.click();
      }
    }, 60000);
  }


  //ADD TIMESOLT TIME CHANGE
  public _changeTime(){
   const indexOfStartTime = this.AvailabilityTimeList.findIndex((availableTime:any) => availableTime.value === this.startTime);
   this.startTime !== '23:30' ? this.endTime = this.endTimeList[indexOfStartTime + 1 ].value : this.endTime = '00:00';
  }

  //HOUR SLOT CLICK
  public appointmentBoxClick(event: any): void {
    const formateFullDate:any = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    const formattedDate:any = this.datePipe.transform(event.date, 'yyyy-MM-dd');
    const formattedStartTime = this.datePipe.transform(event.date, 'HH:mm');

    if(formattedDate > formateFullDate){
      let modalOpenBtn: HTMLElement = document.getElementById('timsolot-popup-btn') as HTMLElement;
      if(modalOpenBtn){
        modalOpenBtn.click();
      }
      this.startDate = formattedDate;
      this.startTime = formattedStartTime;
    }
  }

  //CALENDER TIME RED LINE POSITION CHANGE
  public refreshCalendarTimeLine() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let totalMinutes = hours * 60 + minutes;
    let totalPixels = (totalMinutes / 15) * 20;
    this.hourTime = `${totalPixels}px`;
  }


  //ADD APPOINTMENT
  public addAppointment(){
    let appointmentDate = this.startDate + ' ' + this.startTime;
    var date = new Date(appointmentDate);
    this.id = this.id + 1;
    const newEvent: CalendarEvent = {
      id:this.id,
      start: date,
      end: date,
      title: 'New event',
    };

    this.calenderEvents = [...this.calenderEvents, newEvent];
    this.refresh.next();
    let modalOpenBtn: HTMLElement = document.getElementById('exampleModalLabel') as HTMLElement;
    if(modalOpenBtn){
      modalOpenBtn.click();
    }
  }

  //COPY DATE
  public copyDate(copyDate:any){
    let modalOpenBtn: HTMLElement = document.getElementById('copyolot-popup-btn') as HTMLElement;
    if(modalOpenBtn){
      modalOpenBtn.click();
    }
    this.copyStartDate = this.datePipe.transform(copyDate, 'yyyy-MM-dd');
    const newDate = new Date(this.copyStartDate);
    newDate.setDate(newDate.getDate() + 1);
    this.copyToDate = this.datePipe.transform(newDate, 'yyyy-MM-dd');
  }

  //COPY APPOINTMENT API CALL
  public copyAppointment(){
   const copyAppointMent = this.appointment.copyAppointMent();
   copyAppointMent.forEach((appointMent:any) => {
    this.calenderEvents.push(appointMent);
   })
  }

  //OPEN BOOKED EVENT
  public openBookingEvent(event:any){
    console.log(event);
  }

  //ADD AVAILABILITY
  public addAvailability(){
    const formattedDate = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.startDate = formattedDate;
  }


  //DELETE OT CANCEL APPOINTMENT
  public deleteEventOrCancel(eventToDelete: any) {
    if(eventToDelete.event.meta){
      if(eventToDelete.event.meta.status === 1){
        this.calenderEvents.forEach((event)=> {
          if(event.id === eventToDelete.event.id){
            event.meta.status = 0;
          }
        })
      }
    }else{
      this.calenderEvents = this.calenderEvents.filter((event) => event.id !== eventToDelete.event.id);
    }
  }

  //DAIRY DATE
  public closeOpenMonthViewDay() {
    const selectedDate = {year: this.viewDate.getFullYear(), month: this.viewDate.getMonth() + 1, day: this.viewDate.getDate()};
    this.dairyDate = selectedDate;
  }

  //DAIRY DATE CHANGE
  public dateChange(){
   let originalFormat = this.getOriginalFormat(this.dairyDate);
   this.viewDate = new Date(originalFormat);
   this.currentDateTime = this.dairyDate;
  }

  //CHECK EVENT IS THERE IN THE DATE
  public hasEvent(date: Date): boolean {
    return this.calenderEvents.some(event => new Date(event.start).toDateString() === date.toDateString());
  }

  private getOriginalFormat(date:any){
    return date.year + '-' + date.month + '-' + date.day;
  }

}
