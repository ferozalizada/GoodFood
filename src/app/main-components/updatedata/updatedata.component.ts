import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../classes/restaurant';
import { PostDataService } from '../../services/post-data.service';
import { MenuItems } from '../../classes/menu-items';
import { Apicalls } from '../../classes/apicalls';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  selectedMenuItem: any;
  
  restaurant= new Restaurant(
    '',
    '',
    '',
    '',
    '',
    '',
  );
  menuItem = new MenuItems(
    '',
    '','','','','','',''
  )
  deleteThisR = '';
  deletethisM = ''
  deleteR = new Apicalls(
    'deleteRestaurant', ''
  )
  deleteM = new Apicalls(
    'deleteMenuItem',''
  )
 


  constructor(
    private postdata: PostDataService
  ) { }

  ngOnInit() {
  }
  insertRestaurant(){

    this.restaurant.setMethod('insertRestaurant')
    // console.warn(this.restaurant)
    this.postdata.postRestaurant(this.restaurant).subscribe(data=>{
      console.log(data, "THis is posted on the restauratn")
    })
    alert("Inserted")
  }

  insertMenuItem(){
    console.warn(this.menuItem);
    this.menuItem.setMethod('insertMenuItem');
    this.postdata.postMenuItem(this.menuItem).subscribe(data =>{
      console.log(data, "this is shte menu items")
    })
    alert("Inserted");
  }
  deleteRestaurant(){
    console.warn(this.deleteR)
    this.postdata.deleteRestaurant(this.deleteR).subscribe(
      data =>{
        console.log(data,"is delete from restaurant");
      }
    )
    alert("Deleted")
  }
  deleteMenuItem(){
    console.warn(this.deleteM)
    this.postdata.deleteRestaurant(this.deleteM).subscribe(
      data =>{
        console.log(data,"is delete from restaurant");
      }
    )
    alert("deleted")
  }

}
