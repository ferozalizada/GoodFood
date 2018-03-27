import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private http: Http ) { }

  getData (event){
    console.log('Clicked Checkpoint');
    var x = this.http.get('http://localhost:8888/BackEndDB/response.php')
      .subscribe(event.result);
    // console.log(x);

  }
  ngOnInit() {
  }
}
