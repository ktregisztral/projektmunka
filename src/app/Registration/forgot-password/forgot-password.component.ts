import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  userMail="";

  constructor(private auth:AuthService, private router:Router){
    this.userMail=this.auth.userData;
  }
  
  forgotPassword(userMail:string){
    this.auth.forgotPassword(userMail).then(()=>{
      alert("Jelszóvisszaállító email elküldve, kérjük nézze meg az e-mail fiókját!");
    })
  }
}
