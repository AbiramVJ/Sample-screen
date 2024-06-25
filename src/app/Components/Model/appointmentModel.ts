export class Appointment {
  id: string;
  start: Date;
  end: Date;
  meta: MetaData | undefined;
  isPast:boolean;


  constructor(obj: any) {
    this.id = obj.id;
    this.start = new Date(timeFormat(obj.startDateTime)) ;
    this.end = new Date(timeFormat(obj.endDateTime));
    this.meta = obj.appointment ? new MetaData(obj.appointment) : undefined;
    this.isPast = getStatusOfAppointment(obj.startDateTime);

  }
}

export class MetaData {
  id: string;
  timeslotId: string;
  vendorId: string;
  userId: string;
  name: string;
  status: number;


  constructor(obj: any) {
    this.id = obj.id;
    this.timeslotId = obj.timeslotId;
    this.vendorId = obj.vendorId;
    this.userId = obj.userId;
    this.name = obj.name !== null ? obj.name : 'Available' ;
    this.status = obj.status;

  }
}

export function timeFormat(date:any){
  const formatDate = date.split('T');
  return `${formatDate[0] + ' ' + formatDate[1]}`
}

export function getStatusOfAppointment(startDate:any){
  const today = new Date();
  const start = new Date(timeFormat(startDate));
  if(start > today){
    return false;
  }else{
    return true;
  }
}
