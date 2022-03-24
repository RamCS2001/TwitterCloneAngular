import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  x: number | undefined;

  constructor(private myDb:DbutilityService,private router: Router) { }

  name:String="";
  email:String="";
  date:String="";
  month:String="";
  year:string="";
  username:String="";
  password:String="";
  Cpassword:String="";

  ngOnInit(): void {
  }
  error:string="";
  status:boolean=true;
  signup(){
  if(this.name=="" || this.email==""||this.date==""||this.month==""||this.year==""||this.password==""||this.Cpassword==""){
    this.status=false;
    this.error="Enter all the Details";
    alert(this.error);
    this.error="";
    return;
  }
  if(this.password != this.Cpassword){
    this.status=false;
    this.error=this.error+"password doesn't match";
    alert(this.error);
    this.error="";
  }
  this.x=parseInt(this.year);
  this.x=2021-this.x;

  if(this.x<18){
    this.status=false;
    this.error=this.error+"Sorry You are not eligble for signing up (below 18)";
    alert(this.error);
    this.error="";

  }

  if(this.error!=""){
    alert(this.error);
    return;
  }
  else{
    this.myDb.insertUser(this.username,this.password).subscribe(data=>{
        
          alert("data inserted");
          //redirect to login page
          const redirectUrl = '/login';
        // Redirect the user
        this.router.navigate([redirectUrl]);
    });
  }
  


    
  }


}
