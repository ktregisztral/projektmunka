import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RoomsComponent } from './Rooms/rooms/rooms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Enviroments } from './enviroments';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './Registration/sign-up/sign-up.component';
import { SignInComponent } from './Registration/sign-in/sign-in.component';
import { VerifyEmailComponent } from './Registration/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Registration/forgot-password/forgot-password.component';
import { ReservationComponent } from './Reservation/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RoomsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
