import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './Rooms/rooms/rooms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './Registration/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Registration/verify-email/verify-email.component';
import { SignInComponent } from './Registration/sign-in/sign-in.component';
import { ReservationComponent } from './Reservation/reservation/reservation.component';
import { ForgotPasswordComponent } from './Registration/forgot-password/forgot-password.component';

const routes: Routes = [
  { path:"home", component:HomeComponent },
  { path:"rooms", component:RoomsComponent },
  { path:"about-us", component:AboutUsComponent },
  { path:"contact-us", component:ContactUsComponent },
  { path:"sign-up", component:SignUpComponent },
  { path:"verifyemail", component:VerifyEmailComponent },
  { path:"sign-in", component:SignInComponent },
  { path:"reservation", component:ReservationComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  { path:"", component:HomeComponent },
  { path:"**", component:HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
