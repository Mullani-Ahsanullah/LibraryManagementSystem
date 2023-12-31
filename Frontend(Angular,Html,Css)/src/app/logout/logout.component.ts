import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationServiceService,
    private router: Router) {

  }  ngOnInit() {
    var status = confirm("Are you sure to Log-Out?");
      if (status == true) {
      this.authentocationService.logOut();
      this.router.navigate(['feedback']);
      }
      else{
        this.router.navigate(['books']);
      }
    }

}