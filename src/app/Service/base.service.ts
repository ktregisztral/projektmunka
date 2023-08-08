import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Reservation } from '../reservation';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  ref:AngularFireList<Reservation>

  constructor(private db: AngularFireDatabase) {
    this.ref=db.list('/reservation');
  }

  newReservation(body:Reservation){
    return this.ref.push(body);
  }
}
