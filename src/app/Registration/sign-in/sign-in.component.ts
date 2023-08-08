import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email="";
  password="";
  showError="";
  isError=false;

  constructor(private auth:AuthService, private router:Router){}

  signIn(email:string, password:string){
    this.auth.signIn(email, password)
    .then(() =>{
      console.log("Sikeres belépés.");
      this.router.navigate(['/reservation']);
    })
    .catch((err) =>{
      console.log("Belépés hiba.", err.message);
      this.isError=true;
      this.showError=err.message;
    })
  }

  googleAuth(){
    this.auth.googleAuth()
    .then(() =>{
      console.log("Gugli belépés sikeres.");
      this.router.navigate(['/reservation']);
    })
    .catch((err)=> {
      console.log("Gugli belépés sikertelen.", err.message)
    })

  }
}
