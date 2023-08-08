import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email="";
  password="";

  constructor(private auth:AuthService, private router:Router){}

  signUp(email:string, password:string){
    this.auth.signUp(email, password)
    .then(() =>{
      console.log("Sikeres regisztráció.");
      this.auth.sendVerificationEmail();
    })
    .catch((err) =>{
      console.log("Regisztrációs hiba.", err.message)
    })
  }

  googleAuth(){
    this.auth.googleAuth()
    .then(() =>{
      console.log("Gugli regisztráció sikeres.");
      this.router.navigate(['/reservation']);
    })
    .catch((err)=> {
      console.log("Gugli regisztráció sikertelen.", err.message)
    })

  }
}
