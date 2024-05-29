import { Component } from '@angular/core';
import { I18n,CustomDatepickerI18n } from 'src/app/Services/calender-service.service';
import { NgbDatepickerModule, NgbAlertModule, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],

})

export class TimePickerComponent {
  model!: NgbDateStruct;
  constructor(private i18n: I18n){
    this.i18n.language = 'fr';
  }

  formatDate(model:any){

  }
}
