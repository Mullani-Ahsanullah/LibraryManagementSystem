import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  invalidLogin = false
  loginStatus:any=localStorage.getItem("loginStatus");

  constructor(private service:AuthenticationServiceService, private router:Router)
  {
    if(this.loginStatus=="active")
    {
      this.router.navigate(['books']);
    }
  }

  signin(email:any, password:any)
  {
   console.log(email+" "+password)
    this.service.signin(email,password).subscribe(
      response => {
        console.log(response);
        alert('Loged-In successful...!');
        localStorage.setItem("loginStatus","active");
         this.router.navigate(['books']);
    },
    () => { alert('Wrong email Id or password!!');  }
    );
  }

  
}