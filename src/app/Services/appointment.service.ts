import { Injectable } from '@angular/core';
import { Appointment } from '../Components/Model/appointmentModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentDetails:any = {
    "meetingDuration": 30,
    "workStartTime": "08:00:00",
    "firstTimeSlotStartTime": "00:00:00",
    "totalFullTimeSlot": 282,
    "totalTimeslots": 5,
    "totalAvilableTimeslots": 1,
    "diaryAppointmentRespose": [
        {
            "appointment": {
                "id": "6b139ea0-cbd2-4bad-97ae-7a2353bee411",
                "timeslotId": "a261acca-4c3d-4277-8592-0a87f57a0d3f",
                "vendorId": "8c55091f-b7b7-4669-a1d6-344e79871583",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "Kanch Nanthan",
                "status": 1
            },
            "id": "a261acca-4c3d-4277-8592-0a87f57a0d3f",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-22T16:30:00",
            "endDateTime": "2024-06-22T17:00:00"
        },
        {
            "appointment": {
                "id": "2138bc6d-11fa-4a5d-849a-8cb8aae2c72b",
                "timeslotId": "dc3d6494-f05e-4ebf-ba51-0c69368eeeca",
                "vendorId": "0b69d22b-4ede-4386-b575-7413103168a0",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "Selvarajan karthigabn",
                "status": 1
            },
            "id": "dc3d6494-f05e-4ebf-ba51-0c69368eeeca",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-17T12:30:00",
            "endDateTime": "2024-06-17T13:00:00"
        },
        {
            "appointment": {
                "id": "4b8379e7-6f6c-4c0b-8910-c82dea67ed6d",
                "timeslotId": "1e689330-3d49-4588-b857-1d47385f910b",
                "vendorId": "eb9df8ff-696d-4430-a64d-c61c8cdcd147",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "Aaruran Ladchumanan",
                "status": 1
            },
            "id": "1e689330-3d49-4588-b857-1d47385f910b",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-20T13:30:00",
            "endDateTime": "2024-06-20T14:00:00"
        },
        {
            "appointment": {
                "id": "8f98c50f-f10e-4a07-ad7a-4a528269a60a",
                "timeslotId": "27fc5f53-73fd-466c-8521-4c4ff974e6d2",
                "vendorId": "e5602cfb-05a6-4d87-893d-b294bdd68dd5",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "selvarajan karthigan",
                "status": 1
            },
            "id": "27fc5f53-73fd-466c-8521-4c4ff974e6d2",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-18T12:30:00",
            "endDateTime": "2024-06-18T13:00:00"
        },
        {
            "appointment": {
                "id": "97be5be6-8459-44aa-b698-29d07ca4e547",
                "timeslotId": "27b8325a-ca0d-4ed1-8d3d-67e76ea351a2",
                "vendorId": "8d71a7b8-bcd1-442b-8c02-d53ee47ed72e",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "Vinoja Rasasuntharam",
                "status": 1
            },
            "id": "27b8325a-ca0d-4ed1-8d3d-67e76ea351a2",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-23T15:00:00",
            "endDateTime": "2024-06-23T15:30:00"
        },
        {
            "appointment": {
                "id": "d53166db-6c20-472a-9cc4-342fdf8d42fe",
                "timeslotId": "b7468f04-b959-4fb5-a76b-8d31641db3ca",
                "vendorId": "24fcf4f7-249c-41a2-8e82-c5330074c163",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "abc abc",
                "status": 0
            },
            "id": "b7468f04-b959-4fb5-a76b-8d31641db3ca",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-21T14:00:00",
            "endDateTime": "2024-06-21T14:30:00"
        },
        {
            "appointment": {
                "id": "dfafba34-5eb0-4dee-a810-95bac5f434f9",
                "timeslotId": "94092724-0b2a-423d-b5a7-8fe59cd111d7",
                "vendorId": "fe7bfb52-9b85-4ba7-b8a4-0a4fb803d832",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "Saira Banu",
                "status": 0
            },
            "id": "94092724-0b2a-423d-b5a7-8fe59cd111d7",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-19T01:00:00",
            "endDateTime": "2024-06-19T01:30:00"
        },
        {
            "appointment": null,
            "id": "93fdae2c-fd52-4b78-9b21-afe071b18177",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-20T00:30:00",
            "endDateTime": "2024-06-20T01:00:00"
        },
        {
            "appointment": null,
            "id": "39128b51-e78c-46b4-98a4-cad821445b45",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-20T00:00:00",
            "endDateTime": "2024-06-20T00:30:00"
        },
        {
            "appointment": null,
            "id": "a994b5e1-3daf-4808-afbf-d8cf9d34755c",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-22T10:00:00",
            "endDateTime": "2024-06-22T10:30:00"
        },
        {
            "appointment": {
                "id": "2fcd799f-fbe4-40cf-bc0b-e127b2dcda63",
                "timeslotId": "3bfcd670-e74d-4945-b2ab-d8f6a9a0389d",
                "vendorId": "e5602cfb-05a6-4d87-893d-b294bdd68dd5",
                "userId": "00000000-0000-0000-0000-000000000000",
                "name": "selvarajan karthigan",
                "status": 1
            },
            "id": "3bfcd670-e74d-4945-b2ab-d8f6a9a0389d",
            "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
            "startDateTime": "2024-06-19T13:00:00",
            "endDateTime": "2024-06-19T13:30:00"
        }
    ]
}

  copyApointMent:any = [
    {
        "appointment": null,
        "id": "efa1f281-172d-4c34-8d7a-2205d140b253",
        "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
        "startDateTime": "2024-07-11T04:00:00",
        "endDateTime": "2024-07-11T04:30:00"
    },
    {
        "appointment": null,
        "id": "5ed8d145-ad4f-4fea-8159-15e0cfb091f4",
        "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
        "startDateTime": "2024-07-11T15:00:00",
        "endDateTime": "2024-07-11T15:30:00"
    },
    {
        "appointment": null,
        "id": "5d371a4b-ec11-4d09-b788-b777efce5e52",
        "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
        "startDateTime": "2024-07-11T08:30:00",
        "endDateTime": "2024-07-11T09:00:00"
    },
    {
        "appointment": null,
        "id": "b4114c61-a52a-40c2-81b9-70873b8e5d91",
        "marketingPartnerId": "89b47cee-15a4-4bee-99a7-0fecf0362ce7",
        "startDateTime": "2024-07-11T03:00:00",
        "endDateTime": "2024-07-11T03:30:00"
    }
]

  constructor() { }

  getAppointmentsOfWeek(){
    return this.appointmentDetails.diaryAppointmentRespose.map((appointments: any) => new Appointment(appointments));
  }

  copyAppointMent(){
    return this.copyApointMent.map((appointments: any) => new Appointment(appointments));
  }

}
