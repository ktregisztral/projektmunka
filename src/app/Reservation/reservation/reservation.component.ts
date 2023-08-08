import { Component } from '@angular/core';
import { BaseService } from 'src/app/Service/base.service';
import { Reservation } from 'src/app/reservation';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {
  
  reservationForm!: FormGroup;
  date = new Date().toJSON().slice(0,10);

  reservations:any = {};

  constructor(private base:BaseService, private formBuilder: FormBuilder, private router:Router){
    this.reservationForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthDate: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      telephone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      address: this.formBuilder.group({
        zipCode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        city: ['', Validators.required],
        street: ['', Validators.required],
        houseNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
      }),
      checkIn: [this.date, Validators.required],
      checkOut: [this.date, Validators.required],
      howManyPerson: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)]],
      isDataTrue: ['', Validators.required]
    })
  }
  
  newReservation(body:Reservation){
    this.base.newReservation(body).then(()=>{
      console.log("Új foglalás rögzítve!");
      alert('Foglalását rögzítettük!');
      this.router.navigate(['/home']);
    }).catch(()=>{
      alert('Hiba merült fel a foglalás rögzítése közben, kérjük próbálja újra, vagy vegye fel a kapcsolatot az ügyfélszolgálattal.')
    })
  }

}
