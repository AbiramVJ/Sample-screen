import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, inject, OnInit, } from '@angular/core';
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

@ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

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


  //ADD APPOINTMENT
  public addAppointment(){
    let appointmentDate = this.startDate + ' ' + this.startTime;
    console.log(appointmentDate);
    var date = new Date(appointmentDate);
    const newEvent: CalendarEvent = {
      id:1,
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
  copyDate(copyDate:any){
    let modalOpenBtn: HTMLElement = document.getElementById('copyolot-popup-btn') as HTMLElement;
    if(modalOpenBtn){
      modalOpenBtn.click();
    }
    this.copyStartDate = this.datePipe.transform(copyDate, 'yyyy-MM-dd');
    const newDate = new Date(this.copyStartDate);
    newDate.setDate(newDate.getDate() + 1);
    this.copyToDate = this.datePipe.transform(newDate, 'yyyy-MM-dd');
  }

  copyAppointment(){
   const copyAppointMent = this.appointment.copyAppointMent();
   copyAppointMent.forEach((appointMent:any) => {
    this.calenderEvents.push(appointMent);
   })
  }

  openBookingEvent(event:any){
    console.log(event);
  }

  public addAvailability(){
    const formattedDate = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.startDate = formattedDate;
  }


  deleteEvent(eventToDelete: any) {
    this.calenderEvents = this.calenderEvents.filter((event) => event.id !== eventToDelete.event.id);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    const selectedDate = {year: this.viewDate.getFullYear(), month: this.viewDate.getMonth() + 1, day: this.viewDate.getDate()};
    this.dairyDate = selectedDate;
  }

  dateChange(){
   let originalFormat = this.getOriginalFormat(this.dairyDate);
   this.viewDate = new Date(originalFormat);
   this.currentDateTime = this.dairyDate;
 //  this.currentDateTime = new Date(this.formatter.format(this.model)).toISOString().slice(0, 10);
  }

  getOriginalFormat(date:any){
    return date.year + '-' + date.month + '-' + date.day;
  }

  hasEvent(date: Date): boolean {
    return this.calenderEvents.some(event => new Date(event.start).toDateString() === date.toDateString());
  }


 // unwanted functions
 getDateAsObj(date:string){
  var data = date.split('-');
  return {"year": Number(data[0]), "month": Number(data[1]), "day": Number(data[2])};
}

  parseTime(timeString: string): { hours: number, minutes: number } {
    const time = timeString.match(/(\d+):(\d+)(\w{2})/);
    if (time) {
      let hours = parseInt(time[1], 10);
      const minutes = parseInt(time[2], 10);
      const period = time[3].toUpperCase();

      if (period === 'PM' && hours < 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }

      return { hours, minutes };
    }
    return { hours: 0, minutes: 0 };
  }


}
