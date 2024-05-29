import { Component, OnInit, ViewChild } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private el: ElementRef){

  }

  @ViewChild('datePicker', { static: false }) datePicker!: ElementRef;

  // ngAfterViewInit() {
  //   const datePickerElement = this.datePicker.nativeElement as HTMLInputElement;
  //   console.log(datePickerElement.outerHTML);
  //   datePickerElement.showPicker();
  //   datePickerElement.addEventListener('focus', (event: FocusEvent) => {
  //    // console.log(event.);
  //    // event.preventDefault();
  //     datePickerElement.showPicker();

  //   });

  //   // datePickerElement.addEventListener('blur', (event: FocusEvent) => {
  //   //   datePickerElement.blur();
  //   // });
  // }

  // title = 'sameple_project';
  // public startRating:any = [1,2,3,4,5];
  // public materials:any = [{id:1 , name:'Wood'},{id:1 , name:'steel'},{id:1 , name:'others'}];
  // public colors:any = [{id:1 , name:'Red'},{id:1 , name:'Green'},{id:1 , name:'Blue'}];
  // public productImages:any = [{id:1 , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJsjdzWuE3pno0brIr1t05DJqmiQYTsNGi8YfPKoouQ&s'},
  // {id:1 , url:''},{id:1 , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJsjdzWuE3pno0brIr1t05DJqmiQYTsNGi8YfPKoouQ&s'}]
  // public selectedImage:any;
  // public selectedMaterial:any;
  // public selectedColor:any;

  ngOnInit(): void {
    // this.selectedImage = this.productImages[0].url;
    // this.selectedMaterial = this.materials[0].id;
    // this.selectedColor = this.colors[0].id;
  }
}
