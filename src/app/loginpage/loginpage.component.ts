import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public status:boolean | undefined;
  constructor(private myDb:DbutilityService,private router: Router) { }

  public loginStatus: boolean=false;
  public activeUser:string="";


  ngOnInit(): void {
  }

  usernameBox:String="";
  passwordBox:String="";

  //link: string ="/dashboard";

  loginCheck(){
    this.myDb.loginCheck(this.usernameBox,this.passwordBox).subscribe(data=>{
      if (data["message"]){
       
        const redirectUrl = '/dashboard';
        // Redirect the user
        this.router.navigate([redirectUrl]);
        console.log("logged in");
        this.loginStatus=true;
        console.log(this.loginStatus)
        console.log(data['username'])
        this.activeUser=data['username'];
        this.status=true;
      }
      else{
        const redirectUrl = '/signup';
        // Redirect the user
        this.router.navigate([redirectUrl]);
        alert("Invalid Cerdentials")
        console.log("invalid username and password");
        this.loginStatus=false;
        console.log(this.loginStatus)
        this.status=false;
      }
    });

    // this.myDb.login(this.usernameBox,this.passwordBox).subscribe(data=>{
    //   if (this.myDb.isLoggedIn){
    //     console.log("Hey");
    //     const redirectUrl = '/dashboard';

    //     // Redirect the user
    //     this.router.navigate([redirectUrl]);
    //   }
    //   else{
    //     //this.link="/signup";
    //     const redirectUrl = '/signup';

    //     // Redirect the user
    //     this.router.navigate([redirectUrl]);
    //     console.log("invalid username");

    //   }
    // });
  }

}
