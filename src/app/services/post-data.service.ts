import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { User } from '../classes/user';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Apicalls } from '../classes/apicalls';

const options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
};

function serialize(json: object): string {
  let body = new HttpParams();

  for (const key in json) {
    // console.warn(key);
    if (json.hasOwnProperty(key)) {
      body = body.set(key, json[key]);
    }
  }

  return body.toString();
}

@Injectable()
export class PostDataService {
  private url: string = 'http://localhost:8888/BackEndDB/signUp.php';
  private urlLogin: string = 'http://localhost:8888/BackEndDB/login.php';
  private urlFetchAPI: string = 'http://localhost:8888/BackEndDB/fetchAPI.php';
  
  constructor(private httpClient: HttpClient) { 
    console.log("Post services are running ");
  }

  postRegistrationData(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, serialize(user), options)
  }

  loginUser(user: User) {
    return this.httpClient.post(this.urlLogin, serialize(user), options)
  }

  fetchAPIData(method: Apicalls){
    // console.warn(serialize(method));
    return this.httpClient.post(this.urlFetchAPI, serialize(method), options)
  }
}
