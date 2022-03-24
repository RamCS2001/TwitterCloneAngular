import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbutilityService {
  

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(private http:HttpClient) { }

  loginCheck(username: String,password:String):Observable<any>{
    return this.http.get("http://localhost:5000/logincheck?username="+username+"&password="+password);
  }

  // login(username: String,password:String): Observable<any> {
  //   // return of(true).pipe(
  //   //   delay(1000),
  //   //   tap(() => this.isLoggedIn = false)
  //   // );
  //   return this.http.get("http://localhost:5000/logincheck?username="+username+"&password="+password);
  // }
  insertUser(username: String,password:String){
    return this.http.get("http://localhost:5000/insertUser?username="+username+"&password="+password);

  }

  getUsername(){
    return this.http.get("http://localhost:5000/username");
  }

  getAccounts(){
    return this.http.get("http://localhost:5000/getaccounts");
  }

  getTweets(){
    return this.http.get("http://localhost:5000/getTweets");
  }

  tweet(username: String,tweet:String){
    return this.http.get("http://localhost:5000/tweet?username="+username+"&tweet="+tweet);
  }
}
