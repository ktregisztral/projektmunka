import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new Subject<boolean>();
  loggedUser=false;
  userData:any;

  constructor(private afAuth: AngularFireAuth, private router:Router) {
    this.afAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.loggedUser=true;
          this.userData=user;
        }
        else {
          this.loggedUser=false;
          this.userData=null;
        }
        this.isLogged.next(this.loggedUser);
      } 
    )
  }

  signUp(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

  signIn(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.afAuth.signOut();
  }

  sendVerificationEmail(){
    this.afAuth.currentUser
      .then((user) => {
        user?.sendEmailVerification()
      })
      .then(() => {
        this.router.navigate(['/verifyemail'])
      })
      .catch((err)=> {
        alert(err.message)
      })
  }

  forgotPassword(email:string){
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
