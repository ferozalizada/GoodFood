import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable'
// import { Restaurants}


@Injectable()
export class FetchDataService {
  
  private url: string = 'http://localhost:8888/BackEndDB/response.php';
  private urlGetRestaurant: string = 'http://localhost:8888/BackEndDB/response.php';
  
  constructor(private httpClient: HttpClient) { 
    console.log("The Services are running...");
  }

  fetchData(){
    return this.httpClient.get(this.url)
    .do((res: Response) => res)
    .map((res: Response) => res)
    .catch(this.catchErrors);
  }
  fetchRestaurant(){
    return this.httpClient.get(this.urlGetRestaurant)
    .do((res: Response) => res)
    .map((res: Response) => res)
    .catch(this.catchErrors)
  }
  

  // fetchDataArray(): Observable< Restaurants[]>{
  //   return this.httpClient.get<Restaurant[]>(this.url);
  // }

  catchErrors(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
