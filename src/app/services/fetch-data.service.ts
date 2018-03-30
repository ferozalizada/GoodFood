import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class FetchDataService {
  
  private url: string = 'http://localhost:8888/BackEndDB/response.php';
  constructor(private http: Http) { 
    console.log("The Services are running...");
  }

  fetchData(){
    return this.http.get(this.url)
    .do((res: Response) => res)
    .map((res: Response) => res.json())
    .catch(this.catchErrors);
  }

  catchErrors(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
