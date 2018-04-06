import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../classes/user';

const httpHeader = {
  headers: new HttpHeaders( 'Access-Control-Allow-Origin:'+ '*' )
};

@Injectable()
export class PostDataService {
 private url: string = 'http://localhost:8888/BackEndDB/signUp.php';
 private urlLogin: string = 'http://localhost:8888/BackEndDB/login.php';
  
 constructor(private httpClient: HttpClient) { 
    console.log("Post services are running ");
    // this.postData();
  }
  postRegistrationData(user: User): Observable<User>{
    return this.httpClient.post<User>(this.url, user, httpHeader)
    .pipe(
      tap((user:User) => 
        console.log('Added user front end needs to check response!' )
  ))}

  loginUser(user: any){
    // console.log(user, 'your user data')
    return this.httpClient.post(this.urlLogin, user, httpHeader )
    .pipe(
      tap((user: any) =>
        console.log('posting login details...')
      )
    )
  }
  catchErrors(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }

}
