import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostDataService {
 private url: string = 'http://localhost:8888/BackEndDB/addUser.php';
  constructor(private http: Http) { 
    console.log("Post services are running ");
    // this.postData();
    
  }

  postData(){
    this.http.post(this.url, {
      email: "jahans@gmail.com",
      join_date: "2018-02-02",
      name: "Jahan Said",
      reputation: 0,
      type: "foody",
      userid: "Jahan"
    }).subscribe((data:any) => console.log(data))
  }

}
