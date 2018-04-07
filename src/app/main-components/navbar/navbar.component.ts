import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { FetchDataService } from '../../services/fetch-data.service';
import { PostDataService } from '../../services/post-data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // private url: string = 'http://localhost:8888/BackEndDB/response.php';
  dataReturned = [];
  
  constructor( 
    private fetchData: FetchDataService,
    private postData: PostDataService ) { 
    // this.getData();
    
    // this.printDataArray();
  }
  getData (){
    this.fetchData.fetchData()
    .subscribe(data => {
      // this.dataReturned = data;
      console.log(data, "Received data! Checkpoint httpClient");
      // callback;
    });
  }
  printDataArray(){
    console.log(this.dataReturned, "this is the array after the response");
    // console.log(this.dataReturned,"CheckPoint!");
  }
  ngOnInit() {
  }
}
