import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbutilityService } from '../dbutility.service';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:any;
  list:any;
  list2:any;
  tweetText:string="";
  revList: any;
  constructor(private login: LoginpageComponent,private myDb:DbutilityService,private router: Router) {
    this.myDb.getUsername()
    .subscribe((data:any)=>this.username=data["username"])
    console.log(this.username);

    console.log("Display");
    this.myDb.getAccounts()
    .subscribe((data:any)=>this.list=data["jsondata"])

    console.log("Dislay Tweets");
    this.myDb.getTweets()
    .subscribe((data:any)=>this.list2=data["jsondata"])
  }

  ngOnInit(): void {
  }

  logout(){
    const redirectUrl = '/login';
    this.router.navigate([redirectUrl]);
    this.login.status=false;
  }

  tweet(){
    this.myDb.tweet(this.username,this.tweetText).subscribe((data:any)=>{
      if (data["message"]){
        alert("tweet stored")
        window.location.reload();
      }
      this.tweetText="";
    });

  }
 
    
}
