import { Component } from '@angular/core';
import { AuthenticationServiceService } from './authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library_Management_System';
  constructor(  private authenticationService: AuthenticationServiceService,
    public loginService:AuthenticationServiceService,private router: Router) { }

  log_out() {
    var status = confirm("Are you sure to Log-Out?");
      if (status == true) {
      this.authenticationService.logOut();
        this.router.navigate(['feedback']);}
  }
  }
