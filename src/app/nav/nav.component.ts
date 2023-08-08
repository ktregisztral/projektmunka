import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {

  loggedUser=false;

  constructor(private auth:AuthService, private router:Router){
    this.auth.isLogged.subscribe((u) => {
      this.loggedUser=u
    })
  }

  logOut(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['/home']);
    })
  }
}
